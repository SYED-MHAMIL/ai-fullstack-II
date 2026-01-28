# Phase II Requirements
## Todo Full-Stack Web Application (Spec-Driven)

## 1. Objective

Transform the existing console-based Todo application into a **modern, multi-user, full-stack web application** with persistent storage, authentication, and a clean API contract.

Development must follow a **Spec-Driven Development (SDD)** workflow powered by:

- **Claude Code** (agentic execution)
- **Spec-Kit Plus** (specification lifecycle)
- **AGENTS.md** (cross-agent constitution)

No code may be written outside this workflow.

---

## 2. Development Model

This project explicitly rejects ad-hoc or exploratory coding.

All work must follow the pipeline:

**Specify → Plan → Tasks → Implement**

Roles:

- **AGENTS.md**: Governs agent behavior, constraints, and enforcement rules.
- **Spec-Kit Plus**: Owns all spec artifacts and task traceability.
- **Claude Code**: Executes only validated, task-backed work via MCP.

Every line of code must map back to:
- A Task ID
- A Specify section
- A Plan section

---

## 3. Scope of Phase II

### In Scope
- Full-stack web application
- Multi-user support
- Authentication and authorization
- RESTful API
- Persistent database storage
- Responsive frontend UI

### Out of Scope
- Mobile native apps
- Offline support
- Real-time collaboration
- Background jobs or queues
- Advanced role-based permissions

---

## 4. Functional Requirements

### 4.1 Core Features (Basic Level)

The web application must implement **all five basic Todo features**:

1. Create a task
2. List tasks
3. View task details
4. Update a task
5. Delete a task
6. Mark task as complete / incomplete

Each feature must operate **per authenticated user**.

---

## 5. User Model

Each user has:
- A unique identifier (issued by Better Auth)
- An email address
- A private task list

Users **must never** be able to access another user's data.

---

## 6. API Requirements

### 6.1 REST Endpoints

All endpoints are namespaced by user ID and protected by JWT authentication.

| Method | Endpoint | Description |
|------|--------|------------|
| GET | `/api/{user_id}/tasks` | List all tasks |
| POST | `/api/{user_id}/tasks` | Create a new task |
| GET | `/api/{user_id}/tasks/{id}` | Get task details |
| PUT | `/api/{user_id}/tasks/{id}` | Update a task |
| DELETE | `/api/{user_id}/tasks/{id}` | Delete a task |
| PATCH | `/api/{user_id}/tasks/{id}/complete` | Toggle completion |

---

### 6.2 API Behavior Rules

- All requests **require a valid JWT**
- Missing or invalid tokens return **401 Unauthorized**
- `user_id` in the URL **must match** the authenticated user in the JWT
- All queries must be filtered by authenticated user ownership
- No endpoint may leak cross-user data

---

## 7. Authentication & Security

### 7.1 Authentication Provider

- **Better Auth** (frontend, Next.js)
- JWT-based authentication

### 7.2 JWT Flow

1. User signs in via frontend
2. Better Auth issues a JWT
3. Frontend attaches token to requests:
4. FastAPI backend:
- Verifies JWT signature
- Decodes user identity
- Enforces ownership constraints

### 7.3 Shared Secret

- Both frontend and backend must use:
- Provided via environment variables
- No hardcoded secrets allowed

---

## 8. Backend Requirements

### Technology
- **Python FastAPI**
- **SQLModel ORM**
- **Neon Serverless PostgreSQL**

### Backend Responsibilities
- JWT verification middleware
- User identity extraction
- Task ownership enforcement
- REST API implementation
- Database persistence

---

## 9. Frontend Requirements

### Technology
- **Next.js 16+**
- App Router
- Better Auth integration

### Frontend Responsibilities
- Authentication UI (signup / signin)
- JWT token handling
- Secure API client
- Responsive task management UI

---

## 10. Database Requirements

### Storage
- Neon Serverless PostgreSQL

### Data Rules
- Tasks are scoped to a single user
- No shared or global task visibility
- Database schema must reflect ownership explicitly

---

## 11. Non-Functional Requirements

- Stateless backend authentication
- Clear separation of frontend and backend
- Predictable, spec-backed behavior
- Deterministic agent execution
- No undocumented features

---

## 12. Spec-Kit Enforcement

- All requirements here must be captured in `speckit.specify`
- Architecture must be derived into `speckit.plan`
- Work must be decomposed into `speckit.tasks`
- Implementation may only proceed from approved tasks

If any requirement is ambiguous or missing:
**Agents must stop and request clarification.**

---

## 13. Tooling Constraint

This project must be developed **exclusively** using:

- Spec-Kit Plus
https://github.com/panaversity/spec-kit-plus/
- Claude Code
https://www.claude.com/product/claude-code

No alternative workflows are permitted.

---

## 14. Success Criteria

Phase II is considered complete when:

- All API endpoints function correctly
- Authentication is enforced end-to-end
- Users can only access their own tasks
- Data persists across sessions
- All code is traceable to specs and tasks
- No agent violated AGENTS.md constraints

---

End of Requirements.
