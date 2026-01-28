Phase II: Full-Stack Todo Web Application

Spec-Driven, Agentic Development with Claude Code + Spec-Kit Plus

Project Overview

This project is Phase II of a Todo application, evolving a console-based app into a modern, multi-user full-stack web application with persistent storage, authentication, and a clean API-driven architecture.

The core objective is not just the final app, but demonstrating a spec-driven, agentic development workflow using Claude Code and Spec-Kit Plus, with zero manual coding.

Development Philosophy

Development Approach:
Agentic Dev Stack Workflow

Write Spec → Generate Plan → Break into Tasks → Implement via Claude Code


No manual coding

All behavior defined in specs

Claude Code generates and iterates on implementation

Evaluation focuses on process, prompts, and iterations

Functional Requirements
Basic Level Features

Implement all 5 Basic Level features as a web application

Support multiple authenticated users

Persist all user data in a database

Core Capabilities

RESTful API backend

Responsive frontend UI

Secure authentication and user isolation

Task ownership enforced at all layers

Technology Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 16+ (App Router) |
| Backend | Python FastAPI |
| ORM | SQLModel |
| Database | Neon Serverless PostgreSQL |
| Authentication | Better Auth |
| Spec-Driven Dev | Claude Code + Spec-Kit Plus |
API Design

All APIs are RESTful and scoped per user.

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/{user_id}/tasks | List all tasks |
| POST | /api/{user_id}/tasks | Create a new task |
| GET | /api/{user_id}/tasks/{id} | Get task details |
| PUT | /api/{user_id}/tasks/{id} | Update a task |
| DELETE | /api/{user_id}/tasks/{id} | Delete a task |
| PATCH | /api/{user_id}/tasks/{id}/complete | Toggle completion |
Authentication & Security Model
The Challenge

Better Auth runs in the Next.js frontend

FastAPI backend is a separate Python service

Backend must securely identify the user making API requests

The Solution: JWT-Based Authentication

Flow:

User signs in via frontend

Better Auth issues a JWT

Frontend attaches token to every API request

Authorization: Bearer <token>


FastAPI verifies token using shared secret

Backend extracts user identity from token

All data access is filtered by authenticated user

Required Changes by Component

| Component | Responsibility |
|-----------|----------------|
| Better Auth | Enable JWT issuance |
| Frontend API Client | Attach JWT to all requests |
| FastAPI Backend | Verify JWT and extract user |
| API Routes | Enforce user-level data access |
Shared Secret Configuration

Both services use the same environment variable:

BETTER_AUTH_SECRET


Used for:

JWT signing (frontend)

JWT verification (backend)

Security Guarantees

| Benefit | Description |
|---------|-------------|
| User Isolation | Users only access their own tasks |
| Stateless Auth | No cross-service session calls |
| Token Expiry | Automatic expiration support |
| Backend Enforcement | Ownership validated per request |
API Behavior After Authentication

All endpoints require a valid JWT

Requests without a token return 401 Unauthorized

User ID in token must match requested resource

Task ownership enforced on every operation

Repository Structure (Monorepo)

This project uses a Spec-Kit–friendly monorepo to keep frontend and backend in a single Claude Code context.

```
full-stack-todo-II/
├── .spec-kit/
│   └── config.yaml
├── specs/
│   ├── overview.md
│   ├── architecture.md
│   ├── features/
│   │   ├── task-crud.md
│   │   ├── authentication.md
│   │   └── chatbot.md
│   ├── api/
│   │   ├── rest-endpoints.md
│   │   └── mcp-tools.md
│   ├── database/
│   │   └── schema.md
│   └── ui/
│       ├── components.md
│       └── pages.md
├── CLAUDE.md
├── frontend/
│   ├── CLAUDE.md
│   └── nextjs-app/
├── backend/
│   ├── CLAUDE.md
│   └── fastapi-app/
├── docker-compose.yml
└── README.md
```

Spec-Driven Development Rules

No feature is implemented without a spec

Specs are updated before behavior changes

Code must always reflect the specs

Claude Code may only execute from validated tasks