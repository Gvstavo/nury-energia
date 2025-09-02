import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, whatsapp, city, necessity, } = await request.json();

    if (!name || !email || !whatsapp || !city || !necessity) {
      return NextResponse.json({ error: 'Todos os campos são obrigatórios.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Orçamento Nury" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // O e-mail que receberá a notificação
      replyTo: email,
      subject: `Novo pedido de orçamento de ${name}`,
      html: `
        <h1>Novo Pedido de Orçamento</h1>
        <p>Você recebeu um novo pedido de orçamento através do site.</p>
        <ul>
          <li><strong>Nome:</strong> ${name}</li>
          <li><strong>E-mail:</strong> ${email}</li>
          <li><strong>WhatsApp:</strong> ${whatsapp}</li>
          <li><strong>Cidade:</strong> ${city}</li>
          <li><strong>Necessidade:</strong> ${necessity}</li>
        </ul>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Orçamento enviado com sucesso!' }, { status: 200 });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return NextResponse.json({ error: 'Ocorreu um erro ao tentar enviar o orçamento.' }, { status: 500 });
  }
}