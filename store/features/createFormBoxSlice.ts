// features/formCreation/formCreationSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormCreationState {
  formName: string;
  isCreating: boolean;
  error: string | null;
  lastCreatedFormId: string | null;
}

const initialState: FormCreationState = {
  formName: "",
  isCreating: false,
  error: null,
  lastCreatedFormId: null,
};

const formCreationSlice = createSlice({
  name: "formCreation",
  initialState,
  reducers: {
    // Set the form name
    setFormName: (state, action: PayloadAction<string>) => {
      state.formName = action.payload;
    },

    // Start the form creation process
    startCreatingForm: (state) => {
      state.isCreating = true;
      state.error = null;
    },

    // Form creation succeeded
    formCreationSuccess: (state, action: PayloadAction<string>) => {
      state.isCreating = false;
      state.lastCreatedFormId = action.payload;
      state.formName = "";
    },

    // Form creation failed
    formCreationFailed: (state, action: PayloadAction<string>) => {
      state.isCreating = false;
      state.error = action.payload;
    },

    // Reset the form creation state
    resetFormCreation: (state) => {
      state.formName = "";
      state.isCreating = false;
      state.error = null;
      state.lastCreatedFormId = null;
    },
  },
});

// Export actions
export const {
  setFormName,
  startCreatingForm,
  formCreationSuccess,
  formCreationFailed,
  resetFormCreation,
} = formCreationSlice.actions;

// Selectors
export const selectFormName = (state: { formCreation: FormCreationState }) =>
  state.formCreation.formName;

export const selectIsCreating = (state: { formCreation: FormCreationState }) =>
  state.formCreation.isCreating;

export const selectCreationError = (state: {
  formCreation: FormCreationState;
}) => state.formCreation.error;

export const selectLastCreatedFormId = (state: {
  formCreation: FormCreationState;
}) => state.formCreation.lastCreatedFormId;

export default formCreationSlice.reducer;
