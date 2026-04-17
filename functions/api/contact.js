export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const { name, email, message } = await request.json();

    // 1. Validación de seguridad
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Campos incompletos" }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 2. Envío a la API de Resend usando tus variables de entorno (.env)
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Mantenemos onboarding@resend.dev hasta que verifiques tu propio dominio
        from: 'William Dev Personal Portfolio <onboarding@resend.dev>',
        to: [env.RECIPIENT_EMAIL], 
        reply_to: email, // Para que puedas responderle directamente al cliente
        subject: `System Connection: ${name}`,
        html: `
          <div style="font-family: sans-serif; padding: 40px; background-color: #10131a; color: #e1e2eb; border-radius: 12px;">
            <h2 style="color: #10B981; border-bottom: 1px solid #1d2026; padding-bottom: 15px;">
              NEW INQUIRY DETECTED
            </h2>
            <div style="margin-top: 25px;">
              <p><strong>Origin:</strong> ${name}</p>
              <p><strong>Identity:</strong> ${email}</p>
            </div>
            <div style="margin-top: 30px; background-color: #1d2026; padding: 20px; border-radius: 8px; border-left: 4px solid #00daf3;">
              <p style="color: #00daf3; font-size: 11px; text-transform: uppercase; margin-bottom: 10px; font-weight: bold;">
                Message Payload:
              </p>
              <p style="line-height: 1.6;">${message}</p>
            </div>
            <p style="margin-top: 40px; font-size: 9px; color: rgba(225,226,235,0.2); text-transform: uppercase; letter-spacing: 3px; text-align: center;">
              -- End of Transmission --
            </p>
          </div>
        `,
      }),
    });

    const data = await resendResponse.json();

    if (!resendResponse.ok) {
      throw new Error(data.message || 'Error en Resend');
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}