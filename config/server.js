module.exports = ({ env }) => ({
  url: env('URL', ''),
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '13e79887f674366d79dca5944a8ff819'),
    },
  },
});
