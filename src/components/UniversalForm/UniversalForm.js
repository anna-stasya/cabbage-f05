import React from 'react';
import { BiX } from 'react-icons/bi';

import s from './UniversalForm.module.css';

export default function UniversalForm() {
  return (
    <form>
      <div className={s.iconForm}>
        <BiX
          className={s.iconClose}
          // onClick={toggleModal}
        />
      </div>
      <p className={s.question}>Вы уверены?</p>
      <div className={s.buttons}>
        <button
          className={s.button}
          type="button"
          // onClick={toggleModal}
        >
          Да
        </button>
        <button
          className={s.button}
          type="button"
          // onClick={toggleModal}
        >
          Нет
        </button>
      </div>
    </form>
  );
}
