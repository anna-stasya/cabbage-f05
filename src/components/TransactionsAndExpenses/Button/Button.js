// import React, { useState } from 'react';
import './Button.module.css';

export default function Button({ children, onClick, ...allyProps }) {
  return (
    <button
      // className={
      //   props.type == 'primary' ? 'btn btn-primary' : 'btn btn-secondary'
      // }
      type="button"
      onClick={onClick}
      {...allyProps}
    >
      {children}
    </button>
  );
}
