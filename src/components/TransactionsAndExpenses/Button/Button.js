// import React, { useState } from 'react';
import './Button.module.css';

export default function Button({ children, type, onClick, ...allyProps }) {
  return (
    <button
      // className={
      //   props.type == 'primary' ? 'btn btn-primary' : 'btn btn-secondary'
      // }
      type={type}
      onClick={onClick}
      {...allyProps}
    >
      {children}
    </button>
  );
}
