import s from './Container.module.css';
import back from '../../pages/Transactions/TransactionView.module.css';
 

const Container = ({ children }) => {
  return <div className={`${s.container}`}>
    <div className={back.background}>
      {children}
      </div>
  </div>;
};

export default Container;
