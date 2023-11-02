import pgPromise from 'pg-promise';

// Initialize pg-promise
const pgp = pgPromise();
const databaseUrl = process.env.POSTGRES_URL;
if (!databaseUrl) {
  throw new Error('POSTGRES_URL environment variable is not defined');
}

// Append sslmode=require to the connection string
const connectionString = `${databaseUrl}?sslmode=require`;
export const vercelPostgres = pgp(connectionString);
