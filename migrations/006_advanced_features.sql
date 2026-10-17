CREATE TABLE family_dna (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  family_id UUID NOT NULL REFERENCES families(id) ON DELETE CASCADE,
  fingerprint_hash TEXT UNIQUE NOT NULL,
  heritage_score INTEGER DEFAULT 0,
  generations_traced INTEGER DEFAULT 0,
  connections INTEGER DEFAULT 0,
  milestones INTEGER DEFAULT 0,
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE (family_id)
);

CREATE TABLE memory_capsules (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  family_id UUID NOT NULL REFERENCES families(id) ON DELETE CASCADE,
  author_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE SET NULL,
  title TEXT,
  body TEXT,
  media_url TEXT,
  unlock_year INTEGER NOT NULL,
  is_opened BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_memory_capsules_family ON memory_capsules(family_id);
CREATE INDEX idx_memory_capsules_unlock ON memory_capsules(unlock_year);
