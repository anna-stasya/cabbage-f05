import React, { useState } from 'react';

import UniversalModal from '../../components/Modal/Modal';
import UniversalForm from '../../components/ModalUniversal/ModalUniversal';
// import s from './Example.module.css';

export default function Example() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      Example
      <button type="button" onClick={toggleModal}>
        Тест модалки
      </button>
      {showModal && (
        <UniversalModal onClose={toggleModal}>
          <UniversalForm
            children={'Вы действительно хотите выйти?'}
            onClose={toggleModal}
          />
        </UniversalModal>
      )}
    </div>
  );
}
