import React from 'react';


export default function HomePage({ items = [] }) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Item List</h1>
      <ul className="list-disc pl-6">
        {items.length > 0 ? (
          items.map((item, index) => (
            <li key={index} className="mb-2">{item}</li>
          ))
        ) : (
          <li>No items available</li>
        )}
      </ul>
    </div>
  );
}
