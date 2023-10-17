const nodemailer = require('nodemailer');

module.exports = {
  async create(ctx) {
    // Lógica para crear un usuario, por ejemplo:
    const user = await strapi.query('user').create(ctx.request.body);

    // Lógica para enviar un correo electrónico al nuevo usuario
    const transporter = nodemailer.createTransport({
      host: strapi.config.get('plugins.email.config.providerOptions.host'),
      port: strapi.config.get('plugins.email.config.providerOptions.port'),
      auth: {
        user: strapi.config.get('plugins.email.config.providerOptions.auth.user'),
        pass: strapi.config.get('plugins.email.config.providerOptions.auth.pass'),
      },
    });

    const mailOptions = {
      from: strapi.config.get('plugins.email.config.settings.defaultFrom'),
      to: user.email,
      subject: 'Bienvenido E-Beer Store',
      text: `Hola ${user.username}, bienvenido a nuestro sitio web.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error al enviar el correo electrónico:', error);
          return ctx.badRequest('No se pudo enviar el correo electrónico de bienvenida.');
        } else {
          console.log('Correo electrónico enviado:', info.response);
        }
      });
      

    return user;
  },
};
