import { NextResponse } from "next/server";

export async function POST(request) {
  const webhookUrl = process.env.PABBLY_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Webhook is not configured" },
      { status: 500 }
    );
  }

  const body = await request.json();

  const payload = {
    Timestamp: new Date().toISOString(),
    Source: "",
    Name: "",
    "First Name": "",
    "Last Name": "",
    Email: "",
    Phone: "",
    Company: "",
    "Job Title": "",
    Industry: "",
    "Product Interest": "",
    "Inquiry Type": "",
    "Estimated Quantity": "",
    Timeline: "",
    Specifications: "",
    Message: "",
    "Preferred Contact": "",
    "Attached File Name": "",
    "UTM Source": "",
    "UTM Medium": "",
    "UTM Campaign": "",
    "UTM Term": "",
    "UTM Content": "",
    "Page URL": "",
    Referrer: "",
    ...body,
  };

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to forward submission" },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
