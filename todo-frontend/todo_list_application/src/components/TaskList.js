import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';
import DeleteConfirm from './DeleteConfirm';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const navigate = useNavigate();

  const fetchTasks = async () => {
    const res = await API.get(`/tasks?search=${search}`);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, [search]);

  const handleDelete = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
    setShowConfirm(false);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 w-1/2"
        />
        <button onClick={() => navigate('/add')} className="bg-blue-500 text-white px-4 py-2 rounded">Add Task</button>
      </div>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th>ID</th>
            <th>Assigned To</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id} className="text-center border-t">
              <td>{task.id}</td>
              <td>{task.assignedTo}</td>
              <td>{task.status}</td>
              <td>{task.priority}</td>
              <td>{task.dueDate}</td>
              <td>
                <button onClick={() => navigate(`/edit/${task.id}`)} className="text-blue-500 mr-2">Edit</button>
                <button onClick={() => { setDeleteId(task.id); setShowConfirm(true); }} className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showConfirm && (
        <DeleteConfirm onConfirm={() => handleDelete(deleteId)} onCancel={() => setShowConfirm(false)} />
      )}
    </div>
  );
};

export default TaskList;