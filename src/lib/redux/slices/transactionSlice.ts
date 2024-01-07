import { Transaction } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";

interface TransactionSliceState {
  transactions: Transaction[] | [];
}

const initialState: TransactionSliceState = {
  transactions: [],
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setTransaction: (state, action) => {
      state.transactions = action.payload;
    },
  },
});

export const { setTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;
