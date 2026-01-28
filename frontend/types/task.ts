export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: string; // ISO string with timezone
  dueDate?: string; // ISO string with timezone, optional
  priority: 'Low' | 'Medium' | 'High';
  userId: string;
}