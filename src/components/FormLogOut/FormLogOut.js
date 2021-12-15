import React from 'react';
import { BiX } from 'react-icons/bi';

import s from './FormLogOut.module.css';

export default function UniversalForm() {
  return (
    <form>
      <div className={s.iconForm}>
        <BiX className={s.iconClose} />
      </div>
      <p className={s.question}>Вы действительно хотите выйти?</p>
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
