const RECIPIENT_EMAIL = "hello@candymoreflowers.com";

type QuoteRequest = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  product?: unknown;
  message?: unknown;
};

const asText = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

export async function POST(request: Request) {
  let body: QuoteRequest;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Please try submitting the form again." }, { status: 400 });
  }

  const name = asText(body.name);
  const email = asText(body.email);
  const phone = asText(body.phone);
  const product = asText(body.product);
  const message = asText(body.message);

  if (!name || !email || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return Response.json(
      { error: "Please provide your name, a valid email address, and your request details." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CANDYMORE_FROM_EMAIL;

  if (!apiKey || !from) {
    console.error("Quote email is not configured. Set RESEND_API_KEY and CANDYMORE_FROM_EMAIL.");
    return Response.json(
      { error: "We could not send your request right now. Please email us directly." },
      { status: 503 },
    );
  }

  const emailBody = [
    "New Candy & More quote request",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    `Product: ${product || "Not specified"}`,
    "",
    "Request details:",
    message,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [RECIPIENT_EMAIL],
        reply_to: email,
        subject: `Quote request from ${name}${product ? ` — ${product}` : ""}`,
        text: emailBody,
      }),
    });

    if (!response.ok) {
      console.error("Resend rejected the quote email", await response.text());
      return Response.json(
        { error: "We could not send your request right now. Please email us directly." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Quote email delivery failed", error);
    return Response.json(
      { error: "We could not send your request right now. Please email us directly." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
