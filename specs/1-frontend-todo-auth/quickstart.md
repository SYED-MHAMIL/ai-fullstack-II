# Quickstart Guide: Frontend Todo Web Application

**Feature**: 1-frontend-todo-auth
**Created**: 2026-01-28
**Status**: Draft

## Prerequisites

### System Requirements
- Node.js 18.x or higher
- npm 8.x or higher (or yarn/bun)
- Git
- A code editor (VS Code recommended)

### Environment Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

### Environment Variables
Create a `.env.local` file in the frontend directory with the following:

```env
# Better Auth Configuration
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=your-super-secret-jwt-key-here-make-it-long-and-random

# Backend API URL
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

### Better Auth Setup
1. Install Better Auth:
   ```bash
   npm install better-auth @better-auth/adapter-drizzle
   ```

2. Create auth configuration file `lib/auth.ts`:
   ```typescript
   import { initBetterAuth } from "better-auth";
   import { drizzleAdapter } from "@better-auth/adapter-drizzle";

   export const auth = initBetterAuth({
     secret: process.env.BETTER_AUTH_SECRET!,
     baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
     emailAndPassword: {
       enabled: true,
     },
   });
   ```

## Running the Application

### Development Mode
```bash
npm run dev
```
The application will be available at `http://localhost:3000`

### Production Build
```bash
npm run build
npm start
```

## Key Development Commands

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test

# Run linting
npm run lint

# Run type checking
npm run type-check

# Run all checks
npm run check
```

## Project Structure
```
frontend/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication pages
│   │   ├── login/page.tsx
│   │   └── signup/page.tsx
│   ├── (protected)/       # Protected routes
│   │   ├── dashboard/page.tsx
│   │   └── tasks/
│   │       ├── page.tsx
│   │       ├── [id]/page.tsx
│   │       └── create/page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/            # Reusable components
│   ├── auth/
│   ├── tasks/
│   ├── ui/
│   └── layout/
├── lib/                  # Utilities and configurations
│   ├── auth.ts
│   ├── api.ts
│   └── utils.ts
├── public/               # Static assets
└── styles/               # Global styles
```

## Getting Started Steps

### 1. Set up Authentication
- Configure Better Auth with email/password
- Set up protected route middleware
- Create login/signup components

### 2. Implement Task Components
- Create task list component
- Implement task creation form
- Build task detail view

### 3. Connect to Backend API
- Set up API client for task endpoints
- Implement error handling
- Add loading states

### 4. Add Accessibility Features
- Implement keyboard navigation
- Add ARIA labels
- Ensure color contrast compliance

## API Integration Example

### Creating a Task
```typescript
import { createTask } from '@/lib/api';

const newTask = {
  title: 'Sample Task',
  description: 'Sample Description',
  dueDate: '2026-12-31T14:30:00.000Z',
  priority: 'Medium'
};

try {
  const task = await createTask(userId, newTask);
  console.log('Task created:', task);
} catch (error) {
  console.error('Failed to create task:', error);
}
```

### Fetching User Tasks
```typescript
import { getUserTasks } from '@/lib/api';

try {
  const tasks = await getUserTasks(userId);
  console.log('User tasks:', tasks);
} catch (error) {
  console.error('Failed to fetch tasks:', error);
}
```

## Troubleshooting

### Common Issues

**Issue**: Authentication not working
**Solution**: Verify environment variables and JWT secret

**Issue**: API calls failing
**Solution**: Check backend URL and ensure backend is running

**Issue**: Styling not applied
**Solution**: Verify Tailwind CSS configuration

### Development Tips
- Use the Next.js development server for hot reloading
- Check browser console for client-side errors
- Monitor network tab for API request issues
- Use React Developer Tools for component debugging