Generate SQLModel CRUD query functions.

The output must:
- Accept an active database session
- Enforce filtering by provided constraints (e.g. user_id)
- Return ORM objects or None
- Avoid side effects outside the session

Do not:
- Implement HTTP logic
- Catch exceptions unless instructed
- Bypass ownership filters
