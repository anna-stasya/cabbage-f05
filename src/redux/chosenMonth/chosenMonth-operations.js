import {
    fatchExpensePerMonthRequest,
    fatchExpensePerMonthSuccess,
    fatchExpensePerMonthError,
    fatchIncomePerMonthRequest,
    fatchIncomePerMonthSuccess,
    fatchIncomePerMonthError
} from "./chosenMonth-action";
import moment from 'moment';
import axios from "axios";

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

const fatchTransactionsPerMonth = (date) => async (dispatch) => {
  // token.set("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzA3NzlmY2VmY2E2OWMyN2M1MmEzMiIsImlhdCI6MTY0MDAwMzQ5OCwiZXhwIjoxNjQwMDQ2Njk4fQ.67aAqPj9byGEHJMBN677MYVLprN5Bq4tJNRGIJculzU");
  dispatch(fatchExpensePerMonthRequest());
  dispatch(fatchIncomePerMonthRequest());
  const month = moment(Number(date)).format("MMMM")
console.log(month)
  try {
    const expenseData = await axios.get(`/expense`, {
      params: {
        category: "",
        month,
        year: "",
      }
    });
        const incomeData = await axios.get(`/income`, {
      params: {
        category: "",
        month,
        year: "",
    }});
 
    dispatch(fatchExpensePerMonthSuccess(expenseData.data));
    dispatch(fatchIncomePerMonthSuccess(incomeData.data));
  } catch (error) {
    dispatch(fatchExpensePerMonthError(error));
    dispatch(fatchIncomePerMonthError(error));
  }
};

const operati = {
fatchTransactionsPerMonth,
};

export default operati;
