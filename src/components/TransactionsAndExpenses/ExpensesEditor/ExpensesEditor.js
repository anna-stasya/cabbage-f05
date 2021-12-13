import React, { useState } from 'react';
import './ExpensesEditor.module.css';

export default function ExpensesEditor({ expense }) {
  const [message, setMessage] = useState(`${expense}`);

  const handleChange = e => setMessage(e.target.value);

  return (
    <input
      type="text"
      className="ExpensesCreator"
      value={message}
      onChange={handleChange}
      placeholder="Описание расхода"
    ></input>
  );
}
