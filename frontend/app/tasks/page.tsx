'use client';

import { TaskList } from '@/components/tasks/TaskList';
import { ProtectedLayout } from '@/components/layout/ProtectedLayout';

export default function TasksPage() {
  return (
    <ProtectedLayout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">My Tasks</h1>
          <TaskList />
        </div>
      </div>
    </ProtectedLayout>
  );
}