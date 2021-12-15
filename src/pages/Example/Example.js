import React, { Component } from 'react';

import UniversalModal from '../../components/UniversalModal/UniversalModal';
// import UniversalForm from '../../components/UniversalForm/UniversalForm';
import FormLogOut from '../../components/FormLogOut/FormLogOut';

class Example extends Component {
  state = {
    showModal: false,
    showed: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { showModal } = this.state;
    return (
      <div>
        Example
        <button type="button" onClick={this.toggleModal}>
          Тест модалки
        </button>
        {showModal && (
          <UniversalModal onClose={this.toggleModal}>
            <FormLogOut />
            {/* <div>
              <button type="button" onClick={this.toggleModal}>
                ДА
              </button>
              <button type="button" onClick={this.toggleModal}>
                НЕТ
              </button>
            </div> */}
          </UniversalModal>
        )}
      </div>
    );
  }
}

export default Example;
