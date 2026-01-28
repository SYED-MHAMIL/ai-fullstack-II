Generate SQLModel engine and session management code.

The output must:
- Use SQLModel with SQLAlchemy engine
- Support PostgreSQL via Neon
- Be compatible with FastAPI dependency injection
- Avoid hardcoded secrets

Do not:
- Embed environment variables directly
- Add application logic
