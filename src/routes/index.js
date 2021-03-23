const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = Router();

router.post('/enviar-email', async (req, res) => {
    const { name, email, telephone, message } = req.body;
    contentHTML = `<h1>Información de Usuario<h1>
    <ul>
        <li>Usuario:${name}<li>
        <li>Email:${email}<li>
        <li>Telefono:${telephone}<li>
    </ul>
    <p>${message}</p>`
});

const transporter = nodemailer.createTransport({
    host: 'test1234@gmail.com',
    port: 26,
    secure: false,
    auth: {
        user: 'test',
        pass: '1234'
    },
    tls: {
        rejectUnauthorized: false
    }
});

const info = await transporter.sendMail({
    from: 'Example',
    to: 'juan.perez@gmail.com',
    subject: 'Formulario de Contacto',
    html: contentHTML

});

console.log('Mensaje enviado', info.messageId);

res.redirect('/success.html')

module.exports = router;