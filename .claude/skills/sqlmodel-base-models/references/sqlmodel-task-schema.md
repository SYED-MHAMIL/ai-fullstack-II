Generate a SQLModel Task schema for a task management application.

The schema must:
- Include a primary key
- Include a user_id field for ownership
- Include title, description, completed fields
- Use appropriate PostgreSQL-compatible types
- Be compatible with FastAPI request/response models

Do not:
- Add indexes unless explicitly requested
- Add foreign key constraints unless provided
- Add default values not specified
