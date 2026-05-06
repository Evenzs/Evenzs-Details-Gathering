import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support | Evenzs Ops',
  description:
    'Get help with Evenzs Ops account access, event workflows, privacy requests, account deletion, and technical support.',
};

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
