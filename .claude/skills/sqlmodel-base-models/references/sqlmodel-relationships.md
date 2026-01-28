Generate SQLModel relationship definitions based on provided models and foreign keys.

The output must:
- Use SQLModel Relationship correctly
- Match the provided foreign key fields
- Avoid circular imports
- Be PostgreSQL compatible

Do not:
- Infer relationships
- Modify existing field definitions
