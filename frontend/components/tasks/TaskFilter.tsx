'use client';

import { useState } from 'react';

interface TaskFilterProps {
  onFilterChange: (filters: {
    status?: 'all' | 'completed' | 'pending';
    priority?: 'all' | 'Low' | 'Medium' | 'High';
    search?: string;
  }) => void;
}

export function TaskFilter({ onFilterChange }: TaskFilterProps) {
  const [status, setStatus] = useState<'all' | 'completed' | 'pending'>('all');
  const [priority, setPriority] = useState<'all' | 'Low' | 'Medium' | 'High'>('all');
  const [search, setSearch] = useState('');

  const handleStatusChange = (newStatus: 'all' | 'completed' | 'pending') => {
    setStatus(newStatus);
    onFilterChange({ status: newStatus, priority, search });
  };

  const handlePriorityChange = (newPriority: 'all' | 'Low' | 'Medium' | 'High') => {
    setPriority(newPriority);
    onFilterChange({ status, priority: newPriority, search });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
    onFilterChange({ status, priority, search: newSearch });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            id="status-filter"
            value={status}
            onChange={(e) => handleStatusChange(e.target.value as 'all' | 'completed' | 'pending')}
            className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div>
          <label htmlFor="priority-filter" className="block text-sm font-medium text-gray-700 mb-1">
            Priority
          </label>
          <select
            id="priority-filter"
            value={priority}
            onChange={(e) => handlePriorityChange(e.target.value as 'all' | 'Low' | 'Medium' | 'High')}
            className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          >
            <option value="all">All</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="search-input" className="block text-sm font-medium text-gray-700 mb-1">
            Search
          </label>
          <input
            type="text"
            id="search-input"
            placeholder="Search tasks..."
            value={search}
            onChange={handleSearchChange}
            className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>
    </div>
  );
}