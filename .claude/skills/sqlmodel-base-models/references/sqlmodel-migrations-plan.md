Generate a database migration plan for SQLModel-based schemas.

The output must:
- Describe schema changes step-by-step
- Be compatible with Alembic-style migrations
- Avoid data-destructive operations unless specified

Do not:
- Execute migrations
- Generate raw SQL unless requested
