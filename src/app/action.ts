'use server'

import { decrypt } from '../lib/encryption';

export async function getGoogleMapsApiKey() {
  const encryptedApiKey = process.env.ENCRYPTED_GOOGLE_MAPS_API_KEY;
  if (!encryptedApiKey) {
    throw new Error('Encrypted Google Maps API key is not set');
  }

  return decrypt(encryptedApiKey);
}