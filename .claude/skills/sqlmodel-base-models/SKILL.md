Generate SQLModel base classes for a PostgreSQL-backed application.

The output must:
- Use SQLModel with table=True only where appropriate
- Define a shared BaseModel class
- Include standard primary key and timestamp fields
- Follow PostgreSQL-compatible field types

Do not:
- Add business logic
- Add relationships unless explicitly provided
- Infer fields not specified in the input


## Bundled Resources

- `references/sqlmodel-task-schema.md` - Generate the Task table schema.
- `references/sqlmodel-relationships.md` - Generate explicit relationships between models.
- `references/sqlmodel-session-management.md` - Generate database session and engine setup.
- `references/sqlmodel-crud-queries.md` - Generate CRUD query functions.
- `references/sqlmodel-migrations-plan` - Generate a migration strategy (not code execution).
- `references/sqlmodel-query-security-audit` - Audit ORM queries for data isolation..
