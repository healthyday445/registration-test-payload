import type { Handler, HandlerEvent } from "@netlify/functions";

export const handler: Handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { amount, currency, receipt, notes } = JSON.parse(event.body || "{}");

    if (!amount) {
      return { statusCode: 400, body: JSON.stringify({ error: "Amount is required" }) };
    }

    // Attempt to load Razorpay keys
    const keyId = (process.env.VITE_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID || "").trim();
    const keySecret = (process.env.RAZORPAY_KEY_SECRET || "").trim();

    const debugEnv = { hasKeyId: !!keyId, hasKeySecret: !!keySecret, envKeys: Object.keys(process.env).filter(k => k.includes('RAZORPAY')) };
    console.log("DEBUG ENV:", debugEnv);

    if (!keyId || !keySecret) {
      return { statusCode: 500, body: JSON.stringify({ error: "Razorpay credentials missing. Please set RAZORPAY_KEY_SECRET in your environment variables.", debugEnv }) };
    }

    const auth = Buffer.from(`${keyId}:${keySecret}`).toString('base64');

    const orderPayload = {
      amount: amount, // amount in paisa (e.g. 50000 for 500 INR)
      currency: currency || "INR",
      receipt: receipt || `receipt_${Date.now()}`,
      payment_capture: 1, // Automatically capture payments
      notes: notes || {}
    };

    const response = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${auth}`
      },
      body: JSON.stringify(orderPayload)
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Razorpay API Error:", data);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: "Failed to create Razorpay order", details: data })
      };
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
  } catch (error) {
    console.error("Internal Error creating Razorpay order:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error", details: String(error) })
    };
  }
};
