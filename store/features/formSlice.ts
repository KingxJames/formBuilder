// features/forms/formsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Form {
  id: string;
  name: string;
  fields: FormField[];
  createdAt: string;
  updatedAt: string;
}

interface FormField {
  id: string;
  type: string;
  label: string;
  required: boolean;
  options?: string[];
}

interface FormsState {
  forms: Form[];
  searchQuery: string;
  isLoading: boolean;
  error: string | null;
}

const initialState: FormsState = {
  forms: [],
  searchQuery: "",
  isLoading: false,
  error: null,
};

const formsSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    // Add a new form
    addForm: (
      state,
      action: PayloadAction<Omit<Form, "id" | "createdAt" | "updatedAt">>
    ) => {
      const newForm: Form = {
        ...action.payload,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      state.forms.push(newForm);
    },

    // Edit an existing form
    editForm: (
      state,
      action: PayloadAction<{ id: string; changes: Partial<Form> }>
    ) => {
      const index = state.forms.findIndex(
        (form) => form.id === action.payload.id
      );
      if (index !== -1) {
        state.forms[index] = {
          ...state.forms[index],
          ...action.payload.changes,
          updatedAt: new Date().toISOString(),
        };
      }
    },

    // Delete a form
    deleteForm: (state, action: PayloadAction<string>) => {
      state.forms = state.forms.filter((form) => form.id !== action.payload);
    },

    // Set search query
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },

    // Set loading state
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    // Set error
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

// Export actions
export const {
  addForm,
  editForm,
  deleteForm,
  setSearchQuery,
  setLoading,
  setError,
} = formsSlice.actions;

// Selectors
export const selectForms = (state: { forms: FormsState }) =>
  state.forms.forms.filter((form) =>
    form.name.toLowerCase().includes(state.forms.searchQuery.toLowerCase())
  );

export const selectSearchQuery = (state: { forms: FormsState }) =>
  state.forms.searchQuery;

export const selectIsLoading = (state: { forms: FormsState }) =>
  state.forms.isLoading;

export const selectError = (state: { forms: FormsState }) => state.forms.error;

export default formsSlice.reducer;
