import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface WaitlistPayload {
  email: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { email }: WaitlistPayload = await req.json();

    if (!email || !email.includes("@")) {
      return new Response(
        JSON.stringify({ error: "Valid email required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (!resendApiKey) {
      return new Response(
        JSON.stringify({ success: true, note: "Email service not configured" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="light" />
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #F4F5F7; color: #1A2340; margin: 0; padding: 0; }
    .wrapper { background: #F4F5F7; padding: 40px 16px; }
    .container { max-width: 560px; margin: 0 auto; background: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
    .header { background: linear-gradient(135deg, #1A2340 0%, #0F172A 100%); padding: 36px 32px 28px; text-align: center; }
    .logo { font-size: 28px; font-weight: 800; color: #C9A84C; letter-spacing: 0.03em; }
    .tagline { color: #94A3B8; font-size: 12px; margin-top: 4px; letter-spacing: 0.04em; }
    .body-content { padding: 40px 32px 32px; text-align: center; }
    .checkmark { width: 56px; height: 56px; border-radius: 50%; background: #FFF8E7; border: 2px solid #E8D89C; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 24px; font-size: 24px; }
    .title { font-size: 22px; color: #1A2340; margin: 0 0 12px; font-weight: 700; line-height: 1.3; }
    .subtitle { color: #64748B; font-size: 15px; line-height: 1.7; margin: 0 0 28px; }
    .divider { height: 1px; background: #E2E6ED; margin: 28px 0; }
    .whats-next { text-align: left; }
    .whats-next-title { font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; color: #8B7025; font-weight: 700; margin-bottom: 16px; }
    .step { display: flex; gap: 12px; margin-bottom: 14px; align-items: flex-start; }
    .step-num { width: 24px; height: 24px; border-radius: 6px; background: #FFF8E7; color: #8B7025; font-size: 12px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .step-text { color: #475569; font-size: 14px; line-height: 1.5; }
    .footer-section { background: #F8F9FA; border-top: 1px solid #E2E6ED; padding: 24px 32px; text-align: center; color: #94A3B8; font-size: 12px; line-height: 1.6; }
    .footer-section a { color: #C9A84C; text-decoration: none; }
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
    <div class="checkmark">&#10003;</div>
    <h1 class="title">You're on the list.</h1>
    <p class="subtitle">
      Thanks for joining the Evenzs waitlist. We're building the operating system
      for modern events — and your input is shaping every feature.
    </p>

    <div class="divider"></div>

    <div class="whats-next">
      <div class="whats-next-title">What happens next</div>
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-text">We'll share early designs and ask for your quick take (60-second polls).</div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-text">You'll get priority access before anyone else when we open the beta.</div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-text">If you want to go deeper, reply to any email — we read every one.</div>
      </div>
    </div>
  </div>

  <div class="footer-section">
    <a href="https://evenzs.com">evenzs.com</a><br />
    &copy; ${new Date().getFullYear()} Evenzs.com &middot; All rights reserved.
  </div>
</div>
</div>
</body>
</html>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Evenzs <onboarding@resend.dev>",
        to: [email],
        subject: "You're on the Evenzs waitlist",
        html: htmlBody,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Resend API error:", errText);
      return new Response(
        JSON.stringify({ success: false, error: "Email delivery failed" }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
