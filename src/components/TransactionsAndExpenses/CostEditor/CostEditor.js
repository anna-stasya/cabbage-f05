import React, { useState } from 'react';
import './CostEditor.module.css';

export default function CostEditor({ cost }) {
  const [value, setValue] = useState(`${cost}`);

  const handleChange = e => setValue(e.target.value);

  return (
    <input
      type="number"
      className="CostEditor"
      value={value}
      onChange={handleChange}
      placeholder="0,00"
    ></input>
  );
}
