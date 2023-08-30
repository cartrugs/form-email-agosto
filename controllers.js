// Requerir la dependencia nodemailer para enviar correos electrónicos
const nodemailer = require('nodemailer');

// Controlador de email que contiene dos métodos para mostrar el formulario y enviar el correo
const emailController = {
  // Método para mostrar el formulario de envío de correo
  showForm: (req, res) => {
    res.render('index'); 
  },

  // Método para enviar un correo electrónico
  sendEmail: async (req, res) => {
    const { to, subject, text } = req.body; // Extrae los datos del cuerpo de la solicitud

    try {
      // Configuración del transportador de nodemailer para enviar correos
      const transporter = nodemailer.createTransport({
        service: 'outlook', // Servicio de correo electrónico a usar 
        auth: {
          user: 'uncorreo@outlook.com', // Tu dirección de correo electrónico
          pass: 'contraseña1', // Tu contraseña de correo electrónico
        },
      });

      // Opciones del correo electrónico a enviar
      const mailOptions = {
        from: 'uncorreo@outlook.com', // Dirección de correo electrónico del remitente
        to, // Dirección de correo electrónico del destinatario
        subject, // Asunto del correo
        text, // Contenido del correo
      };

      // Envía el correo utilizando el transportador
      await transporter.sendMail(mailOptions);

      // Renderiza la vista 'send.ejs' si el correo se envió correctamente
      res.render('send');

    } catch (error) {
      console.error('Error sending email:', error); // Registra un error si no se puede enviar el correo
      res.status(500).json({ message: 'An error occurred while sending the email.' }); // Devuelve una respuesta de error al cliente
    }
  },
};

module.exports = emailController; 