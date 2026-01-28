Audit SQLModel query functions for multi-user data isolation.

The audit must:
- Verify all read/write queries are scoped by user_id
- Detect missing ownership filters
- Flag unsafe query patterns

Do not:
- Modify code
- Suggest architectural changes
