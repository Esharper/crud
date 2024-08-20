// src/app/management/page.js
"use client";

import React, { useState } from 'react';
import ManagementPage from '../../components/ManagementPage'; 

export default function ManagementPagePage() {
  const [items, setItems] = useState([]);

  return (
    <ManagementPage items={items} setItems={setItems} />
  );
}
