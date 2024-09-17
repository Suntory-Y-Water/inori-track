import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const processEnvConfig = {
  apiUrl: process.env.API_URL,
};

if (!processEnvConfig.apiUrl) {
  throw new Error('API_URL is not set');
}
