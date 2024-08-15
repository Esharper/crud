"use client";

export default function HomePage({ items }) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Item List</h1>
      <ul className="list-disc pl-6">
        {items.map((item, index) => (
          <li key={index} className="mb-2">{item}</li>
        ))}
      </ul>
    </div>
  );
}
