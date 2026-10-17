-- EbiLink Multi-Tenant Schema — SQLite (Free Forever, File-Based)
-- Developer: Odebunmi Tawwab
-- All family-owned resources use family_id UUID for tenant isolation

CREATE TABLE IF NOT EXISTS families (
  id TEXT PRIMARY KEY, -- UUID stored as TEXT
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  country TEXT,
  timezone TEXT DEFAULT 'UTC',
  preferred_language TEXT DEFAULT 'en',
  avatar_url TEXT,
  cover_url TEXT,
  owner_id TEXT,
  is_active INTEGER DEFAULT 1,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_families_slug ON families(slug);

CREATE TABLE IF NOT EXISTS family_memberships (
  id TEXT PRIMARY KEY,
  family_id TEXT NOT NULL REFERENCES families(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL,
  role TEXT DEFAULT 'member',
  status TEXT DEFAULT 'active',
  invited_by TEXT,
  joined_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(family_id, user_id)
);

CREATE INDEX IF NOT EXISTS idx_memberships_family ON family_memberships(family_id);
CREATE INDEX IF NOT EXISTS idx_memberships_user ON family_memberships(user_id);

CREATE TABLE IF NOT EXISTS family_invitations (
  id TEXT PRIMARY KEY,
  family_id TEXT NOT NULL REFERENCES families(id) ON DELETE CASCADE,
  email TEXT,
  role TEXT DEFAULT 'member',
  token TEXT UNIQUE NOT NULL,
  invited_by TEXT,
  status TEXT DEFAULT 'pending',
  expires_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_invitations_token ON family_invitations(token);
