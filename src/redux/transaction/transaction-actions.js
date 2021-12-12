import { createAction } from '@reduxjs/toolkit';

export const fetchTransactionRequest = createAction(
  'transaction/fetchTransactionRequest',
);
export const fetchTransactionSuccess = createAction(
  'transaction/fetchTransactionSuccess',
);
export const fetchTransactionError = createAction(
  'transaction/fetchTransactionError',
);

export const addTransactionRequest = createAction(
  'transaction/addTransactionRequest',
);
export const addTransactionSuccess = createAction(
  'transaction/addTransactionSuccess',
);
export const addTransactionError = createAction(
  'transaction/addTransactionError',
);

export const deleteTransactionRequest = createAction(
  'transaction/deleteTransactionRequest',
);
export const deleteTransactionSuccess = createAction(
  'transaction/deleteTransactionSuccess',
);
export const deleteTransactionError = createAction(
  'transaction/deleteTransactionError',
);
