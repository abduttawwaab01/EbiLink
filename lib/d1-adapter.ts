// Cloudflare D1 Adapter Boundary — SQLite-compatible, Free-Forever
// Developer: Odebunmi Tawwab
// D1 provides SQLite-compatible persistent database for multi-tenant isolation

export interface D1Binding {
  prepare(query: string): D1PreparedStatement;
  exec(query: string): Promise<{ success: boolean; meta: unknown }>;
  dump(): Promise<ArrayBuffer>;
  batch<T>(statements: D1PreparedStatement[]): Promise<(D1Result<T> | null)[]>;
}

export interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  first<T>(colName?: string): Promise<T | null>;
  run<T>(): Promise<D1Result<T>>;
  all<T>(): Promise<D1Result<T>>;
  raw<T>(): Promise<T[]>;
}

export interface D1Result<T = unknown> {
  results: T[];
  success: boolean;
  meta: { duration: number; changes?: number; last_row_id?: number; rows_read?: number; rows_written?: number };
}

export function getDBBinding(): D1Binding | null {
  // In production (Cloudflare Workers), DB is available via process.env or global binding
  // In development, falls back to SQLite file adapter
  if (typeof (globalThis as any).DB !== 'undefined') {
    return (globalThis as any).DB as D1Binding;
  }
  return null;
}
