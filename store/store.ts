import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./features/formSlice";
import formCreationReducer from "./features/createFormBoxSlice";

export const store = configureStore({
  reducer: { forms: formReducer, formCreation: formCreationReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
