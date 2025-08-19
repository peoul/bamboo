export const config = {
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV || "development",
  // JWT (for later)
  jwtSecret: process.env.JWT_SECRET || "your-secret-key",

  databaseUser: process.env.DB_USER,
  databasePassword: process.env.DB_PASSWORD,
  databaseName: process.env.DB_NAME,
  databaseHost: process.env.DB_HOST,
  databasePort: parseInt(process.env.DB_PORT || "5432"), 
  // Development flag
  isDev: process.env.NODE_ENV === "development",
};

export default config;
