# API Contract: Task Management Endpoints

**Feature**: 1-frontend-todo-auth
**Created**: 2026-01-28
**Status**: Defined
**Version**: 1.0

## Overview
This document defines the API contracts for task management operations in the Todo Web Application. All endpoints require authentication via JWT token in the Authorization header.

## Common Headers
- `Authorization: Bearer {jwt_token}` (Required for all endpoints)
- `Content-Type: application/json` (For POST/PUT/PATCH requests)

## Common Response Structure

### Success Responses
```
{
  "success": true,
  "data": { ... },  // Response data object
  "timestamp": "2026-01-28T12:00:00.000Z"  // ISO timestamp
}
```

### Error Responses
```
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Descriptive error message",
    "details": { ... }  // Optional additional error details
  },
  "timestamp": "2026-01-28T12:00:00.000Z"
}
```

## Endpoints

### 1. GET /api/{user_id}/tasks
**Description**: Retrieve all tasks for the specified user

**Path Parameters**:
- `user_id` (string, required): The ID of the authenticated user

**Query Parameters**:
- `completed` (boolean, optional): Filter by completion status
- `priority` (string, optional): Filter by priority level ('Low', 'Medium', 'High')
- `sort` (string, optional): Sort order ('created', 'due_date', 'priority')
- `limit` (number, optional): Maximum number of results to return
- `offset` (number, optional): Number of results to skip (for pagination)

**Success Response** (200 OK):
```
{
  "success": true,
  "data": {
    "tasks": [
      {
        "id": "uuid-string",
        "title": "Task title",
        "description": "Task description",
        "completed": false,
        "createdAt": "2026-01-28T12:00:00.000Z",
        "dueDate": "2026-02-28T12:00:00.000Z",
        "priority": "Medium",
        "userId": "user-uuid"
      }
    ],
    "pagination": {
      "total": 10,
      "limit": 10,
      "offset": 0,
      "hasMore": false
    }
  },
  "timestamp": "2026-01-28T12:00:00.000Z"
}
```

**Error Responses**:
- 401: Unauthorized (Invalid or missing JWT)
- 403: Forbidden (User trying to access another user's tasks)
- 404: Not Found (User ID doesn't exist)

### 2. POST /api/{user_id}/tasks
**Description**: Create a new task for the specified user

**Path Parameters**:
- `user_id` (string, required): The ID of the authenticated user

**Request Body**:
```
{
  "title": "Task title (required)",
  "description": "Task description (optional)",
  "dueDate": "2026-02-28T12:00:00.000Z (optional)",
  "priority": "Medium (optional, default: 'Medium')"
}
```

**Success Response** (201 Created):
```
{
  "success": true,
  "data": {
    "task": {
      "id": "new-uuid-string",
      "title": "Task title",
      "description": "Task description",
      "completed": false,
      "createdAt": "2026-01-28T12:00:00.000Z",
      "dueDate": "2026-02-28T12:00:00.000Z",
      "priority": "Medium",
      "userId": "user-uuid"
    }
  },
  "timestamp": "2026-01-28T12:00:00.000Z"
}
```

**Error Responses**:
- 400: Bad Request (Validation errors)
- 401: Unauthorized (Invalid or missing JWT)
- 403: Forbidden (User trying to create tasks for another user)
- 422: Unprocessable Entity (Data validation failed)

### 3. GET /api/{user_id}/tasks/{id}
**Description**: Retrieve a specific task by ID for the specified user

**Path Parameters**:
- `user_id` (string, required): The ID of the authenticated user
- `id` (string, required): The ID of the task to retrieve

**Success Response** (200 OK):
```
{
  "success": true,
  "data": {
    "task": {
      "id": "uuid-string",
      "title": "Task title",
      "description": "Task description",
      "completed": false,
      "createdAt": "2026-01-28T12:00:00.000Z",
      "dueDate": "2026-02-28T12:00:00.000Z",
      "priority": "Medium",
      "userId": "user-uuid"
    }
  },
  "timestamp": "2026-01-28T12:00:00.000Z"
}
```

**Error Responses**:
- 401: Unauthorized (Invalid or missing JWT)
- 403: Forbidden (User trying to access another user's task)
- 404: Not Found (Task doesn't exist)

### 4. PUT /api/{user_id}/tasks/{id}
**Description**: Update an existing task for the specified user

**Path Parameters**:
- `user_id` (string, required): The ID of the authenticated user
- `id` (string, required): The ID of the task to update

**Request Body**:
```
{
  "title": "Updated task title (optional)",
  "description": "Updated task description (optional)",
  "dueDate": "2026-02-28T12:00:00.000Z (optional)",
  "priority": "High (optional)",
  "completed": false (optional)
}
```

**Success Response** (200 OK):
```
{
  "success": true,
  "data": {
    "task": {
      "id": "uuid-string",
      "title": "Updated task title",
      "description": "Updated task description",
      "completed": false,
      "createdAt": "2026-01-28T12:00:00.000Z",
      "dueDate": "2026-02-28T12:00:00.000Z",
      "priority": "High",
      "userId": "user-uuid"
    }
  },
  "timestamp": "2026-01-28T12:00:00.000Z"
}
```

**Error Responses**:
- 400: Bad Request (Validation errors)
- 401: Unauthorized (Invalid or missing JWT)
- 403: Forbidden (User trying to update another user's task)
- 404: Not Found (Task doesn't exist)
- 422: Unprocessable Entity (Data validation failed)

### 5. DELETE /api/{user_id}/tasks/{id}
**Description**: Delete a specific task by ID for the specified user

**Path Parameters**:
- `user_id` (string, required): The ID of the authenticated user
- `id` (string, required): The ID of the task to delete

**Success Response** (200 OK):
```
{
  "success": true,
  "data": {
    "message": "Task deleted successfully",
    "taskId": "uuid-string"
  },
  "timestamp": "2026-01-28T12:00:00.000Z"
}
```

**Error Responses**:
- 401: Unauthorized (Invalid or missing JWT)
- 403: Forbidden (User trying to delete another user's task)
- 404: Not Found (Task doesn't exist)

### 6. PATCH /api/{user_id}/tasks/{id}/complete
**Description**: Toggle the completion status of a specific task

**Path Parameters**:
- `user_id` (string, required): The ID of the authenticated user
- `id` (string, required): The ID of the task to update

**Request Body**:
```
{
  "completed": true  // New completion status (required)
}
```

**Success Response** (200 OK):
```
{
  "success": true,
  "data": {
    "task": {
      "id": "uuid-string",
      "title": "Task title",
      "description": "Task description",
      "completed": true,
      "createdAt": "2026-01-28T12:00:00.000Z",
      "dueDate": "2026-02-28T12:00:00.000Z",
      "priority": "Medium",
      "userId": "user-uuid"
    }
  },
  "timestamp": "2026-01-28T12:00:00.000Z"
}
```

**Error Responses**:
- 400: Bad Request (Invalid completion status)
- 401: Unauthorized (Invalid or missing JWT)
- 403: Forbidden (User trying to update another user's task)
- 404: Not Found (Task doesn't exist)
- 422: Unprocessable Entity (Data validation failed)

## Authentication & Authorization
- All endpoints require a valid JWT in the Authorization header
- The `user_id` in the path must match the user ID in the JWT claims
- Users cannot access or modify other users' tasks
- Invalid JWTs result in 401 Unauthorized responses