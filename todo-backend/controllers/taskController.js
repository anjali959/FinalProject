const Task = require('../models/taskModel');

exports.getTasks = (req, res) => {
  const search = req.query.search || '';
  Task.getAll(search, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.createTask = (req, res) => {
  Task.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Task created', taskId: result.insertId });
  });
};

exports.getTask = (req, res) => {
  Task.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result[0]);
  });
};

exports.updateTask = (req, res) => {
  Task.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Task updated' });
  });
};

exports.deleteTask = (req, res) => {
  Task.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Task deleted' });
  });
};
