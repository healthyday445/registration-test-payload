export async function handler(event) {
  console.log(`[register] Triggered via ${event.httpMethod}`);
  
  if (event.body) {
    let payload;
    try {
      payload = JSON.parse(event.body);
      console.log(`[register] Registration Payload:`, JSON.stringify(payload, null, 2));
    } catch (e) {
      console.log(`[register] Raw Request Body:`, event.body);
    }
  }

  // Forward the request to the actual backend on Cloud Run
  const url = `https://healthyday-backend-v2-773381060399.asia-south1.run.app/api/register`;
  console.log(`[register] Forwarding request to:`, url);

  try {
    const res = await fetch(url, {
      method: event.httpMethod,
      headers: {
        'Content-Type': 'application/json',
      },
      body: event.body
    });

    const data = await res.text();
    console.log(`[register] Response Status:`, res.status);
    console.log(`[register] Response Body:`, data);

    return {
      statusCode: res.status,
      headers: { "Content-Type": "application/json" },
      body: data,
    };
  } catch (error) {
    console.error(`[register] Fetch Error:`, error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to forward request to backend." })
    };
  }
}
