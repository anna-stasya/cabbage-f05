import { balanceServices } from '../../services';
import balanceActions from './balance-actions';
import authOperations from '../auth/auth-operations'; 

const getBalance = () => async dispatch => {
  try {
    dispatch(balanceActions.setLoading(true));
    dispatch(balanceActions.setLoading(false));
  } catch (error) {
    throw new Error(error);
  }
};

const balanceOperations = {
  getBalance,
};

export default balanceOperations;
