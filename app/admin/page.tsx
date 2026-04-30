'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import {
  Lock,
  LogOut,
  Users,
  MessageSquare,
  Phone,
  Mail,
  Building2,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  Download,
} from 'lucide-react';

interface Submission {
  id: string;
  created_at: string;
  event_type: string;
  name: string | null;
  email: string | null;
  phone_number: string | null;
  company_role: string | null;
  stress_points: string | null;
  current_tools: string | null;
  top_headache: string | null;
  open_to_conversation: boolean | null;
}

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD ?? 'evenzs-admin-2026';

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'waitlist' | 'feedback'>('waitlist');
  const [expanded, setExpanded] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const { data } = await supabase
      .from('feedback_submissions')
      .select('*')
      .order('created_at', { ascending: false });
    if (data) setSubmissions(data as Submission[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (authed) fetchData();
  }, [authed, fetchData]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthed(true);
      setPasswordError('');
    } else {
      setPasswordError('Incorrect password.');
    }
  };

  const waitlist = submissions.filter((s) => s.event_type === 'Waitlist');
  const feedback = submissions.filter((s) => s.event_type !== 'Waitlist');

  const exportCSV = (rows: Submission[]) => {
    const headers = ['Date', 'Name', 'Email', 'Phone', 'Role/Company', 'Event Type', 'Open to Call', 'Stress Points', 'Tools Used', 'Top Headache'];
    const lines = rows.map((r) => [
      new Date(r.created_at).toLocaleDateString(),
      r.name ?? '',
      r.email ?? '',
      r.phone_number ?? '',
      r.company_role ?? '',
      r.event_type,
      r.open_to_conversation == null ? '' : r.open_to_conversation ? 'Yes' : 'No',
      (r.stress_points ?? '').replace(/"/g, '""'),
      (r.current_tools ?? '').replace(/"/g, '""'),
      (r.top_headache ?? '').replace(/"/g, '""'),
    ].map((v) => `"${v}"`).join(','));
    const csv = [headers.join(','), ...lines].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `evenzs-${activeTab}-${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const fmt = (d: string) =>
    new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' });

  if (!authed) {
    return (
      <div className="min-h-screen bg-[#070C1B] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm"
        >
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-2xl bg-[#C9A84C]/[0.1] border border-[#C9A84C]/20 flex items-center justify-center mx-auto mb-4">
              <Lock size={20} className="text-[#C9A84C]" strokeWidth={1.8} />
            </div>
            <h1 className="text-white text-xl font-bold tracking-[-0.02em]">Admin Access</h1>
            <p className="text-[#4A5568] text-sm mt-1">Evenzs internal dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              autoFocus
              className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-[#4A5568] focus:border-[#C9A84C]/40 focus:outline-none transition-all duration-200"
            />
            {passwordError && (
              <p className="text-red-400 text-xs px-1">{passwordError}</p>
            )}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#E8C84A] text-[#070C1B] font-semibold text-sm transition-all duration-300"
            >
              Enter Dashboard
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  const activeRows = activeTab === 'waitlist' ? waitlist : feedback;

  return (
    <div className="min-h-screen bg-[#070C1B] text-white">
      {/* Header */}
      <div className="border-b border-white/[0.06] px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-white font-bold tracking-[-0.02em]">Evenzs Admin</h1>
            <p className="text-[#4A5568] text-xs mt-0.5">Internal dashboard</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchData}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/[0.08] text-[#64748B] hover:text-white hover:border-white/[0.16] text-xs font-medium transition-all duration-200"
            >
              <RefreshCw size={12} className={loading ? 'animate-spin' : ''} strokeWidth={2} />
              Refresh
            </button>
            <button
              onClick={() => exportCSV(activeRows)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/[0.08] text-[#64748B] hover:text-white hover:border-white/[0.16] text-xs font-medium transition-all duration-200"
            >
              <Download size={12} strokeWidth={2} />
              Export CSV
            </button>
            <button
              onClick={() => setAuthed(false)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/[0.08] text-[#64748B] hover:text-red-400 hover:border-red-500/20 text-xs font-medium transition-all duration-200"
            >
              <LogOut size={12} strokeWidth={2} />
              Sign out
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Waitlist Signups', value: waitlist.length, icon: Mail },
            { label: 'Feedback Responses', value: feedback.length, icon: MessageSquare },
            { label: 'Open to a Call', value: feedback.filter((f) => f.open_to_conversation).length, icon: Phone },
            { label: 'Total Submissions', value: submissions.length, icon: Users },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Icon size={14} className="text-[#C9A84C]" strokeWidth={1.8} />
                <span className="text-[#4A5568] text-xs font-medium">{label}</span>
              </div>
              <p className="text-white text-2xl font-bold tracking-[-0.03em]">{value}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 p-1 bg-white/[0.03] border border-white/[0.06] rounded-xl w-fit mb-6">
          {(['waitlist', 'feedback'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-[#C9A84C]/[0.12] text-[#C9A84C] border border-[#C9A84C]/20'
                  : 'text-[#4A5568] hover:text-[#64748B]'
              }`}
            >
              {tab === 'waitlist' ? `Waitlist (${waitlist.length})` : `Feedback (${feedback.length})`}
            </button>
          ))}
        </div>

        {/* Table */}
        {loading ? (
          <div className="text-center py-20 text-[#4A5568] text-sm">Loading...</div>
        ) : activeRows.length === 0 ? (
          <div className="text-center py-20 text-[#4A5568] text-sm">No entries yet.</div>
        ) : (
          <div className="space-y-2">
            {activeRows.map((row) => (
              <div
                key={row.id}
                className="bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.1] transition-all duration-200"
              >
                {/* Row summary */}
                <button
                  onClick={() => setExpanded(expanded === row.id ? null : row.id)}
                  className="w-full flex items-center gap-4 px-5 py-4 text-left"
                >
                  <div className="flex-1 min-w-0 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="min-w-0">
                      <p className="text-white text-sm font-medium truncate">
                        {row.name ?? <span className="text-[#4A5568] italic">Anonymous</span>}
                      </p>
                      <p className="text-[#4A5568] text-xs truncate">{row.email ?? '—'}</p>
                    </div>
                    <div className="min-w-0 hidden sm:block">
                      <p className="text-[#64748B] text-xs">{row.event_type}</p>
                      <p className="text-[#4A5568] text-xs truncate">{row.company_role ?? '—'}</p>
                    </div>
                    <div className="hidden sm:block">
                      {row.open_to_conversation != null && (
                        <span className={`inline-block text-[10px] font-semibold px-2.5 py-1 rounded-full ${
                          row.open_to_conversation
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : 'bg-white/[0.04] text-[#4A5568] border border-white/[0.06]'
                        }`}>
                          {row.open_to_conversation ? 'Open to call' : 'No call'}
                        </span>
                      )}
                    </div>
                    <div className="text-right sm:text-left">
                      <p className="text-[#4A5568] text-xs">{fmt(row.created_at)}</p>
                    </div>
                  </div>
                  {activeTab === 'feedback' && (
                    <div className="text-[#4A5568] shrink-0">
                      {expanded === row.id ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </div>
                  )}
                </button>

                {/* Expanded detail (feedback only) */}
                <AnimatePresence>
                  {activeTab === 'feedback' && expanded === row.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-white/[0.04] grid sm:grid-cols-3 gap-4">
                        {[
                          { label: 'Stress & Manual Work', value: row.stress_points },
                          { label: 'Tools Used Today', value: row.current_tools },
                          { label: 'Top Headache', value: row.top_headache },
                        ].map(({ label, value }) => (
                          <div key={label}>
                            <p className="text-[11px] uppercase tracking-[0.18em] text-[#C9A84C] font-semibold mb-2">{label}</p>
                            <p className="text-[#94A3B8] text-sm leading-[1.7]">
                              {value || <span className="text-[#334155] italic">Not answered</span>}
                            </p>
                          </div>
                        ))}
                      </div>
                      {(row.phone_number || row.company_role) && (
                        <div className="px-5 pb-4 flex items-center gap-6">
                          {row.phone_number && (
                            <div className="flex items-center gap-1.5 text-xs text-[#4A5568]">
                              <Phone size={11} strokeWidth={2} />
                              {row.phone_number}
                            </div>
                          )}
                          {row.company_role && (
                            <div className="flex items-center gap-1.5 text-xs text-[#4A5568]">
                              <Building2 size={11} strokeWidth={2} />
                              {row.company_role}
                            </div>
                          )}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
