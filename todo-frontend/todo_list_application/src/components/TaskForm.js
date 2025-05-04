// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';

const TaskForm = ({ initialData = {}, onSubmit }) => {
  const [task, setTask] = useState({
    assignedTo: '',
    status: 'Not Started',
    dueDate: '',
    priority: 'Normal',
    description: '',
    comments: '',
    ...initialData,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1">Assigned To</label>
        <input
          type="text"
          name="assignedTo"
          value={task.assignedTo}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="block mb-1">Status</label>
        <select
          name="status"
          value={task.status}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        >
          <option>Not Started</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
      </div>

      <div>
        <label className="block mb-1">Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="block mb-1">Priority</label>
        <select
          name="priority"
          value={task.priority}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        >
          <option>Low</option>
          <option>Normal</option>
          <option>High</option>
        </select>
      </div>

      <div>
        <label className="block mb-1">Description</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="block mb-1">Comments</label>
        <textarea
          name="comments"
          value={task.comments}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save Task
      </button>
    </form>
  );
};

export default TaskForm;
