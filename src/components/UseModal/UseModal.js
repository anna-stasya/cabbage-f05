import React, { useState } from 'react';

import UniversalModal from '../../components/Modal/Modal';
import UniversalForm from '../../components/ModalUniversal/ModalUniversal';

export default function Example() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button type="button" onClick={toggleModal}>
        Кнопка на которую кидать модалку
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
