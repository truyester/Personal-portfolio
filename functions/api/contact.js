export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const { name, email, message } = await request.json();

    // 1. Validación básica (Perfecto como lo tenías)
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Faltan campos" }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 2. Envío directo a la API de Resend vía Fetch
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Orbita Digital <onboarding@resend.dev>',
        to: ['orbitasolucionesdigitales@gmail.com'],
        subject: `Nueva consulta: ${name}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #132d46;">
            <h2 style="color: #3ba597;">Nuevo mensaje de contacto</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p style="margin-top: 20px;"><strong>Mensaje:</strong></p>
            <div style="background: #f2efef; padding: 15px; border-radius: 8px;">
              ${message}
            </div>
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