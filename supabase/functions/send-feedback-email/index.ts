import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface FeedbackPayload {
  event_type: string;
  stress_points: string;
  current_tools: string;
  breakdown_points: string;
  top_headache: string;
  open_to_conversation: boolean;
  name: string;
  email: string;
  phone_number: string;
  company_role: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const payload: FeedbackPayload = await req.json();
    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      dateStyle: "full",
      timeStyle: "long",
    });

    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (resendApiKey) {
      const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #F4F5F7; color: #1A2340; margin: 0; padding: 0; -webkit-text-size-adjust: 100%; }
    .wrapper { background: #F4F5F7; padding: 40px 16px; }
    .container { max-width: 600px; margin: 0 auto; background: #FFFFFF; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
    .header { background: #1A2340; padding: 28px 32px; }
    .logo { font-size: 24px; font-weight: 700; color: #C9A84C; letter-spacing: 0.04em; }
    .tagline { color: #94A3B8; font-size: 12px; margin-top: 2px; }
    .body-content { padding: 32px; }
    .badge { display: inline-block; background: #FFF8E7; border: 1px solid #E8D89C; color: #8B7025; padding: 4px 14px; border-radius: 20px; font-size: 11px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 20px; }
    .title { font-size: 20px; color: #1A2340; margin: 0 0 6px; font-weight: 700; }
    .timestamp { color: #64748B; font-size: 13px; margin-bottom: 28px; }
    .section { margin-bottom: 24px; }
    .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #8B7025; margin-bottom: 6px; font-weight: 700; }
    .value { background: #F8F9FA; border: 1px solid #E2E6ED; border-radius: 8px; padding: 14px 16px; color: #1A2340; font-size: 14px; line-height: 1.6; white-space: pre-wrap; }
    .highlight { color: #1A2340; font-weight: 700; }
    .footer-section { background: #F8F9FA; border-top: 1px solid #E2E6ED; padding: 20px 32px; color: #64748B; font-size: 12px; line-height: 1.6; }
  </style>
</head>
<body>
<div class="wrapper">
<div class="container">
  <div class="header">
    <div class="logo">Evenzs</div>
    <div class="tagline">From Toast To Takeoff</div>
  </div>

  <div class="body-content">
    <div class="badge">New Feedback Submission</div>
    <h1 class="title">New Feedback Received</h1>
    <p class="timestamp">Submitted: ${timestamp}</p>

    <div class="section">
      <div class="label">Event Type</div>
      <div class="value">${payload.event_type}</div>
    </div>

    <div class="section">
      <div class="label">Greatest Source of Stress or Manual Work</div>
      <div class="value">${payload.stress_points || "\u2014"}</div>
    </div>

    <div class="section">
      <div class="label">Current Tools & Processes</div>
      <div class="value">${payload.current_tools || "\u2014"}</div>
    </div>

    <div class="section">
      <div class="label">What Breaks Down During Live Execution</div>
      <div class="value">${payload.breakdown_points || "\u2014"}</div>
    </div>

    <div class="section">
      <div class="label">Top Operational Headache to Eliminate</div>
      <div class="value">${payload.top_headache || "\u2014"}</div>
    </div>

    <div class="section">
      <div class="label">Contact Information</div>
      <div class="value"><span class="highlight">${payload.name}</span>
${payload.email}
${payload.phone_number || "\u2014"}
${payload.company_role || "\u2014"}</div>
    </div>

    <div class="section">
      <div class="label">Open to Feedback Conversation</div>
      <div class="value">${payload.open_to_conversation ? "Yes — follow up recommended" : "No"}</div>
    </div>
  </div>

  <div class="footer-section">
    This feedback was submitted through the Evenzs Customer Discovery Portal.<br />
    &copy; ${new Date().getFullYear()} Evenzs.com &middot; Building the future OS for event execution.
  </div>
</div>
</div>
</body>
</html>`;

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Evenzs Feedback <onboarding@resend.dev>",
          to: ["contact@evenzs.com"],
          subject: "New Evenzs Industry Feedback Submission",
          html: htmlBody,
        }),
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
