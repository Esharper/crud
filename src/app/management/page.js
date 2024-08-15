"use client";

import React, { useState } from 'react';

function ManagementPage({ items, setItems }) {
  const [newItem, setNewItem] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState('');

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditingText(items[index]);
  };

  const saveEdit = () => {
    if (editingText.trim()) {
      const updatedItems = [...items];
      updatedItems[editingIndex] = editingText;
      setItems(updatedItems);
      setEditingIndex(null);
      setEditingText('');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Manage Items</h1>
      
      <div className="mb-4">
        <input
          type="text"
          className="border p-2 mr-2"
          placeholder="Add new item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button 
          className="bg-blue-500 text-white p-2 rounded" 
          onClick={addItem}
          aria-label="Add new item"
        >
          Add Item
        </button>
      </div>

      <ul className="list-disc pl-6">
        {items.map((item, index) => (
          <li key={index} className="mb-2">
            {editingIndex === index ? (
              <div className="flex items-center">
                <input
                  type="text"
                  className="border p-2 mr-2"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button 
                  className="bg-green-500 text-white p-2 rounded" 
                  onClick={saveEdit}
                  aria-label="Save changes"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <span>{item}</span>
                <div>
                  <button 
                    className="bg-yellow-500 text-white p-2 ml-2 rounded" 
                    onClick={() => startEditing(index)}
                    aria-label="Edit item"
                  >
                    Edit
                  </button>
                  <button 
                    className="bg-red-500 text-white p-2 ml-2 rounded" 
                    onClick={() => deleteItem(index)}
                    aria-label="Delete item"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManagementPage;
