import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, company, service, budget, details, contactMethod } = body;

    // Validate required fields
    if (!fullName || !email || !details) {
      return NextResponse.json(
        { error: "Name, email, and project details are required." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address format." },
        { status: 400 }
      );
    }

    const inquiryPayload = {
      fullName,
      email,
      company: company || "N/A",
      service,
      budget,
      details,
      contactMethod,
      timestamp: new Date().toISOString(),
    };

    // Log the inquiry for operational tracking
    console.log("[RENDER RUSH INQUIRY]:", JSON.stringify(inquiryPayload));

    // If Resend API Key is set in production environment, dispatch email
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendKey}`,
          },
          body: JSON.stringify({
            from: "Render Rush Inquiries <inquiry@renderrush.in>",
            to: ["prashantsingh.24cx@gmail.com"],
            subject: `New Project Inquiry: ${fullName} (${service})`,
            text: `
Name: ${fullName}
Email: ${email}
Company: ${company || "N/A"}
Service: ${service}
Budget: ${budget}
Preferred Method: ${contactMethod}
Details:
${details}
            `.trim(),
          }),
        });
      } catch (err) {
        console.error("Resend delivery failed:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Your project inquiry has been received. Our team will contact you shortly.",
    });
  } catch (error) {
    console.error("Error processing inquiry:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry. Please try again or reach out on WhatsApp." },
      { status: 500 }
    );
  }
}
