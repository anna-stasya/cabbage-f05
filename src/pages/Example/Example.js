import React, { useState } from 'react';

import UniversalModal from '../../components/UniversalModal/UniversalModal';
import UniversalForm from '../../components/UniversalForm/UniversalForm';
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

