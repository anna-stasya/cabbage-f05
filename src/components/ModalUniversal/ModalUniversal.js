import React, { useState, useEffect } from 'react';
import { BiX } from 'react-icons/bi';

import s from './ModalUniversal.module.css';

export default function ModalUniversal({ children, onClose }) {
  const [enterActive, setEnterActive] = useState(true);
  const [registerActive, setRegisterActive] = useState(false);

  useEffect(() => {
    const icon = document.getElementById('icon-close');
    const btnNo = document.getElementById('btnNo');

    btnNo.addEventListener('click', onClose);
    icon.addEventListener('click', onClose);
    return () => {
      btnNo.removeEventListener('click', onClose);
      icon.removeEventListener('click', onClose);
    };
  }, [onClose]);

  const toggleEnterActiveBtn = () => {
    setEnterActive(true);
    setRegisterActive(false);
  };

  const toggleRegisterActiveBtn = () => {
    setEnterActive(false);
    setRegisterActive(true);
  };
  return (
    <form>
      <BiX name="close" type="button" id="icon-close" className={s.iconClose} />
      <p className={s.question}>{children}</p>
      <div className={s.buttons}>
        <button
          className={s.button}
          type="submit"
          active={enterActive}
          name="yes"
          onClick={toggleEnterActiveBtn}
        >
          Да
        </button>
        <button
          className={s.button}
          type="button"
          id="btnNo"
          active={registerActive}
          name="no"
          onClick={toggleRegisterActiveBtn}
        >
          Нет
        </button>
      </div>
    </form>
  );
}
