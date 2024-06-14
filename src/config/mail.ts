export default {
  host: process.env.MAIL_HOST,
  port: (process.env.MAIL_PORT) ? parseInt(process.env.MAIL_PORT, 10): undefined,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
};
