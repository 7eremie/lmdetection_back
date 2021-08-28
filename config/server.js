module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'http://localhost:1337'),
  proxy: env.bool('IS_PROXIED', true),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '2a68d642b5eaba58aa357029757501d7'),
    },
  },

  emitErrors: false,
  cron: {
    enabled: env.bool('CRON_ENABLED', false),
  },

  admin: {
    url: env('PUBLIC_ADMIN_URL', '/admin'),
    autoOpen: false,
    // watchIgnoreFiles: [
    //   './my-custom-folder', // Folder
    //   './scripts/someScript.sh', // File
    // ],
    // host: 'localhost', // Only used for --watch-admin
    // port: 8003, // Only used for --watch-admin
    serveAdminPanel: env.bool('SERVE_ADMIN', true),
    // forgotPassword: {
    //   from: 'no-reply@example.com',
    //   replyTo: 'no-reply@example.com',
    // },
  },
});
