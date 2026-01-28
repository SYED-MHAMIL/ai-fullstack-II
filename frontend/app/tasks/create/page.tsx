'use client';

import { TaskForm } from '@/components/tasks/TaskForm';

export default function CreateTaskPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Create New Task</h1>
        <TaskForm />
      </div>
    </div>
  );
}