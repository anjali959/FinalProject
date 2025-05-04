import React from 'react';

const DeleteConfirm = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow">
        <p className="mb-4">Are you sure you want to delete this task?</p>
        <div className="flex justify-end">
          <button onClick={onCancel} className="px-4 py-2 mr-2 border rounded">Cancel</button>
          <button onClick={onConfirm} className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirm;
