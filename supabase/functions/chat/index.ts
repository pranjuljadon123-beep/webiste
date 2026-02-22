import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are ForAxis AI — a friendly, knowledgeable sales assistant for ForAxis, an enterprise operations platform headquartered in Bangalore, India, founded in 2026 by three friends.

## About ForAxis
ForAxis is a unified platform for enterprise operations with 6 integrated modules:
1. **Order Management** — Central system of record for operational execution
2. **Document Intelligence** — Auto-generate and manage compliance-ready documents with AI extraction
3. **Procurement & Auctions** — RFQs, vendor management, and blind reverse auctions (15-25% savings)
4. **Shipment Tracking** — Multi-modal visibility with predictive ETAs across 500+ carriers
5. **Invoice Reconciliation** — Match invoices with contracts and orders automatically
6. **AI Decision Engine** — Predictive insights and explainable recommendations

## Key Value Props
- Execution-first: not just dashboards, but systems that act
- AI recommends and executes actions, not just shows data
- 99.9% uptime SLA, 24/7 support
- Goes live in weeks, not months
- Integrates with existing ERPs (SAP, Oracle, etc.)

## Your Behavior
- Be conversational, warm, and concise (2-3 sentences per response unless detail is asked for)
- Answer questions about ForAxis features, pricing approach, and capabilities
- If someone is interested in a demo or meeting, collect their details: name, email, company, and preferred time
- When you have all their details, respond with a special JSON block to trigger the booking: [BOOKING_READY]{"name":"...","email":"...","company":"...","preferred_time":"..."}[/BOOKING_READY]
- Never make up pricing numbers — say "we offer custom pricing based on your needs" and suggest booking a demo
- If asked something you don't know, be honest and suggest they speak with the team via a demo
- Keep responses short and action-oriented`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, bookingData } = await req.json();

    // If bookingData is provided, save the lead
    if (bookingData) {
      const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
      const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
      const supabase = createClient(supabaseUrl, supabaseKey);

      const { error } = await supabase.from("meeting_leads").insert({
        name: bookingData.name,
        email: bookingData.email,
        company: bookingData.company || null,
        preferred_time: bookingData.preferred_time || null,
        message: bookingData.message || null,
      });

      if (error) {
        console.error("Error saving lead:", error);
        return new Response(
          JSON.stringify({ error: "Failed to save booking" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      return new Response(
        JSON.stringify({ success: true }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // AI chat
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Too many requests, please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI service temporarily unavailable." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
