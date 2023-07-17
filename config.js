module.exports = {
    PORT: process.env.PORT || 3000,
    DB_URI: process.env.DB_URI || 'mongodb://localhost/hospital',
    JWT_SECRET: process.env.JWT_SECRET || 'your-secret-key',
  };
  