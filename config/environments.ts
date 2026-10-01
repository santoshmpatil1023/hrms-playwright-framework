import dotenv from 'dotenv';

dotenv.config();
function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const environment = {
  baseUrl: requiredEnv('BASE_URL'),
  apiUrl: requiredEnv('API_URL'), 
  username: requiredEnv('TEST_USERNAME'),
  password: requiredEnv('TEST_PASSWORD'),
};
  