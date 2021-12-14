import React from 'react';
import { BiX } from 'react-icons/bi';

import s from './UniversalForm.module.css';

export default function UniversalForm() {
  return (
    <form className={s.form}>
      <BiX className={s.iconClose} />
      <p className={s.question}>Вы уверены?</p>
      <div className={s.buttons}>
        <button
          className={s.button}
          type="button"
          // onClick={this.toggleModal}
        >
          Да
        </button>
        <button
          className={s.button}
          type="button"
          // onClick={this.toggleModal}
        >
          Нет
        </button>
      </div>
    </form>
  );
}
