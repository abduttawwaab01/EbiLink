// Free-Forever Storage Adapter — Local Filesystem (Zero Cost)
// Developer: Odebunmi Tawwab
// Uploads stored in /public/uploads and served directly by Next.js

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const STORAGE_DIR = join(process.cwd(), 'public', 'uploads');

export function getStoragePath(filename: string) {
  return `/uploads/${filename}`;
}

export function saveLocalFile(buffer: Buffer, filename: string) {
  if (!existsSync(STORAGE_DIR)) mkdirSync(STORAGE_DIR, { recursive: true });
  const path = join(STORAGE_DIR, filename);
  writeFileSync(path, buffer);
  return getStoragePath(filename);
}
