'use client';

import { useState, useEffect } from 'react';
import { Task } from '@/types/task';
import { TaskItem } from '@/components/tasks/TaskItem';
import Link from 'next/link';
import { useSession } from 'better-auth/react';

export function TaskList() {
  const { data: session } = useSession();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch tasks for the current user
    const fetchTasks = async () => {
      try {
        // In a real implementation, this would call the API
        // For now, we'll use mock data
        const mockTasks: Task[] = [
          {
            id: '1',
            title: 'Complete project proposal',
            description: 'Finish the project proposal document and submit for review',
            completed: false,
            createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
            dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days from now
            priority: 'High',
            userId: session?.user?.id || 'user-123'
          },
          {
            id: '2',
            title: 'Schedule team meeting',
            description: 'Arrange a meeting with the team to discuss project timeline',
            completed: true,
            createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
            dueDate: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
            priority: 'Medium',
            userId: session?.user?.id || 'user-123'
          },
          {
            id: '3',
            title: 'Review documentation',
            description: 'Go through the latest documentation updates',
            completed: false,
            createdAt: new Date().toISOString(), // now
            dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
            priority: 'Low',
            userId: session?.user?.id || 'user-123'
          }
        ];

        setTasks(mockTasks);
      } catch (err) {
        setError('Failed to load tasks');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (session?.user) {
      fetchTasks();
    }
  }, [session]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg">Loading tasks...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
        <div className="flex">
          <div className="text-red-700">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Your Tasks</h2>
        <Link
          href="/tasks/create"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create New Task
        </Link>
      </div>

      {tasks.length === 0 ? (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 sm:p-6 text-center">
            <h3 className="text-lg font-medium text-gray-900">No tasks yet</h3>
            <p className="mt-1 text-sm text-gray-500">Get started by creating a new task.</p>
            <div className="mt-6">
              <Link
                href="/tasks/create"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create Task
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <ul className="bg-white shadow overflow-hidden sm:rounded-md">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      )}
    </div>
  );
}