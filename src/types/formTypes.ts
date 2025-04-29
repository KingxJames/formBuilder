// types/formTypes.ts
export type FormField = {
  id: string;
  type: "text" | "number" | "select" | "checkbox" | "radio" | "date"; // Add more types as needed
  label: string;
  required: boolean;
  placeholder?: string;
  options?: string[]; // For select, radio, or checkbox fields
  defaultValue?: string | number | boolean;
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    errorMessage?: string;
  };
};
