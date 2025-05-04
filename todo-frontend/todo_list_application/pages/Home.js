import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTasks, deleteTask } from '../api';
import TaskList from '../components/TaskList';
import DeleteConfirm from '../components/DeleteConfirm';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');
  const [deleteId, setDeleteId] = useState(null);

  const fetchTasks = async () => {
    const res = await getTasks(search);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, [search]);

  const handleDelete = async () => {
    await deleteTask(deleteId);
    setDeleteId(null);
    fetchTasks();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to="/add" className="bg-green-500 text-white px-4 py-2 rounded">Add Task</Link>
      </div>

      <TaskList tasks={tasks} onDelete={setDeleteId} />

      <DeleteConfirm
        open={deleteId !== null}
        onCancel={() => setDeleteId(null)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default Home;