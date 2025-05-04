const db = require('../db');

const Task = {
  getAll: (search, callback) => {
    let sql = `SELECT * FROM tasks`;
    if (search) {
      sql += ` WHERE assignedTo LIKE ? OR status LIKE ? OR priority LIKE ?`;
      db.query(sql, [`%${search}%`, `%${search}%`, `%${search}%`], callback);
    } else {
      db.query(sql, callback);
    }
  },

  create: (task, callback) => {
    const sql = `INSERT INTO tasks SET ?`;
    db.query(sql, task, callback);
  },

  getById: (id, callback) => {
    db.query(`SELECT * FROM tasks WHERE id = ?`, [id], callback);
  },

  update: (id, task, callback) => {
    db.query(`UPDATE tasks SET ? WHERE id = ?`, [task, id], callback);
  },

  delete: (id, callback) => {
    db.query(`DELETE FROM tasks WHERE id = ?`, [id], callback);
  }
};

module.exports = Task;
