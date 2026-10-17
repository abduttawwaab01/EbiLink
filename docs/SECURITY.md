# Security Model
- Server-side validation on all protected routes.
- No service credentials exposed to browser.
- RLS policies on family-scoped tables.
- Cross-family access blocked at DB and API layer.
- File uploads validated by type/size; private access via signed URLs.
- Audit logs for sensitive actions.
