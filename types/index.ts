export interface Family {
  id: string;
  name: string;
  slug: string;
  description?: string;
  country?: string;
  timezone: string;
  preferred_language: string;
  avatar_url?: string;
  cover_url?: string;
  owner_id?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface FamilyMembership {
  id: string;
  family_id: string;
  user_id: string;
  role: 'owner' | 'admin' | 'moderator' | 'member' | 'minor';
  status: 'pending' | 'active' | 'revoked' | 'left';
  invited_by?: string;
  joined_at: string;
}

export interface Profile {
  id: string;
  display_name?: string;
  avatar_url?: string;
  bio?: string;
  preferred_name?: string;
  location?: string;
  languages?: string[];
  interests?: string[];
  occupation?: string;
  created_at: string;
  updated_at: string;
}

export interface Post {
  id: string;
  family_id: string;
  author_id: string;
  title?: string;
  body: string;
  visibility: 'family' | 'circle' | 'selected';
  circle_id?: string;
  is_announcement: boolean;
  created_at: string;
  updated_at: string;
}

export interface Event {
  id: string;
  family_id: string;
  title: string;
  description?: string;
  event_type: string;
  start_time: string;
  end_time?: string;
  location?: string;
  is_virtual: boolean;
  cover_url?: string;
  organizer_id?: string;
  created_at: string;
}
