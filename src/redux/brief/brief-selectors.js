const getExpenseBySixMonth = state => {
  console.log('state', state);
  return state.brief.sixMonthsExpense;
};

const getIncomeBySixMonth = state => {
  return state.brief.sixMonthsIncome;
};

const briefSelectors = {
  getExpenseBySixMonth,
  getIncomeBySixMonth,
};

export default briefSelectors;
