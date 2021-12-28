module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3096ed6755304c218a4c0febf056ca23'),
  },
});
