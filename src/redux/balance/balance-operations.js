import { balanceServices } from '../../services';
import balanceActions from './balance-actions';

const getBalance = () => async dispatch => {
  try {
    dispatch(balanceActions.setLoading(true));
    const balance = await balanceServices.getBalance();
    dispatch(balanceActions.getBalance(balance));
    dispatch(balanceActions.setLoading(false));
  } catch (error) {
    throw new Error(error);
  }
};

const balanceOperations = {
  getBalance,
};

export default balanceOperations;
