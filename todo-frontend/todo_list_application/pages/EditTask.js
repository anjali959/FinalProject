import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getTask, updateTask } from '../api';

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await getTask(id);
      setForm(res.data);
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTask(id, form);
    navigate('/');
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Edit Task</h2>
      <form onSubmit={handleSubmit} className="grid gap-4 max-w-md">
        <input name="assignedTo" value={form.assignedTo || ''} onChange={handleChange} className="border p-2 rounded" required />
        <select name="status" value={form.status || ''} onChange={handleChange} className="border p-2 rounded">
          <option>Not Started</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
        <input type="date" name="dueDate" value={form.dueDate || ''} onChange={handleChange} className="border p-2 rounded" required />
        <select name="priority" value={form.priority || ''} onChange={handleChange} className="border p-2 rounded">
          <option>Low</option>
          <option>Normal</option>
          <option>High</option>
        </select>
        <textarea name="description" value={form.description || ''} onChange={handleChange} className="border p-2 rounded" />
        <textarea name="comments" value={form.comments || ''} onChange={handleChange} className="border p-2 rounded" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update Task</button>
      </form>
    </div>
  );
};

export default EditTask;