module.exports = {
  load: {
    before: ['timer', 'responseTime', 'logger', 'cors', 'responses', 'gzip'],
    after: ['parser', 'router'],
  },
  settings: {
	  parser: {
      enabled: true,
      multipart: true,
      formidable: {
        maxFileSize: 200 * 1024 * 1024 // Defaults to 200mb
      }
    },
    cors: {
      enabled: true,
      origin: [
        'http://localhost','https://localhost',
        `http://localhost:${process.env.PORT}`,
        `https://localhost:${process.env.PORT}`,
        `http://${process.env.CORS_DOMAIN || 'localhost'}`,
        `https://${process.env.CORS_DOMAIN || 'localhost'}`,
        `http://www.${process.env.CORS_DOMAIN || 'localhost'}`,
        `https://www.${process.env.CORS_DOMAIN || 'localhost'}`]
    },
  },
}