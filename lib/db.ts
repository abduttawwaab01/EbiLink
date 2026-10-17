// Neon PostgreSQL connection boundary
// Developer: Odebunmi Tawwab

export const getConnectionString = () => {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error('DATABASE_URL is not set');
  return url;
};

export const dbConfig = {
  ssl: true,
  max: 20,
};
