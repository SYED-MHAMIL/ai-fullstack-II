import Link from 'next/link';
import { Task } from '@/types/task';

interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <li className="border-b border-gray-200 last:border-b-0">
      <Link href={`/tasks/${task.id}`} className="block hover:bg-gray-50">
        <div className="px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <p className={`truncate text-sm font-medium ${task.completed ? 'text-gray-500 line-through' : 'text-indigo-600'}`}>
              {task.title}
            </p>
            <div className="ml-2 flex flex-shrink-0">
              <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getPriorityColor(task.priority)}`}>
                {task.priority}
              </span>
            </div>
          </div>
          <div className="mt-2 sm:flex sm:justify-between">
            <div className="sm:flex">
              <p className="flex items-center text-sm text-gray-500">
                {task.description && (
                  <span className="truncate">{task.description}</span>
                )}
              </p>
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
              {task.dueDate && (
                <p>
                  Due: <time dateTime={task.dueDate}>{new Date(task.dueDate).toLocaleDateString()}</time>
                </p>
              )}
              <p className="ml-2">
                {task.completed ? (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Completed
                  </span>
                ) : (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    Pending
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}