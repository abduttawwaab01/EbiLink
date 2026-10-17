# Database Design
Tables with family_id: profiles, families, family_memberships, family_invitations, posts, comments, reactions, events, event_rsvps, conversations, messages, albums, album_media, family_relationships, help_requests, notifications, audit_logs.
Every family-owned resource is isolated by family_id. Foreign keys enforce referential integrity. UUID primary keys.
