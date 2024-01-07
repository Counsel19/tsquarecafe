import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "./slices/modalSlice";
import ServiceSlice from "./slices/service/serviceSlice";
import UserSlice from "./slices/userSlice";
import TransactionSlice from "./slices/transactionSlice";

export const store = configureStore({
  reducer: {
    modal: ModalSlice,
    service: ServiceSlice,
    user: UserSlice,
    transactions: TransactionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
