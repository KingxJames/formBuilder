import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setFormName,
  startCreatingForm,
  resetFormCreation,
  selectFormName,
  selectIsCreating,
  formCreationSuccess,
  formCreationFailed,
} from "../../../store/features/createFormBoxSlice";
import { addForm } from "../../../store/features/formSlice";
import { FormField } from "../../types/formTypes"; // Import the FormField type

interface CreateFormBoxProps {
  open: boolean;
  onClose: () => void;
  onCreate?: (formData: { name: string; fields: FormField[] }) => void;
}

export const CreateFormBox: React.FC<CreateFormBoxProps> = ({
  open,
  onClose,
  onCreate,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formName = useSelector(selectFormName);
  const isCreating = useSelector(selectIsCreating);

  const handleCreateForm = async () => {
    if (!formName.trim()) return;

    dispatch(startCreatingForm());

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const newFormId = Date.now().toString();

      const newForm = {
        name: formName,
        fields: [] as FormField[], // Initialize with empty array of FormField
      };

      dispatch(addForm(newForm));
      dispatch(formCreationSuccess(newFormId));

      onClose();
      navigate("/formBuilder", { state: { formName, formId: newFormId } });

      if (onCreate) {
        onCreate(newForm);
      }
    } catch (error) {
      dispatch(
        formCreationFailed(
          error instanceof Error ? error.message : "Failed to create form"
        )
      );
    }
  };

  // ... rest of the component remains the same ...
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFormName(e.target.value));
  };

  const handleClose = () => {
    dispatch(resetFormCreation());
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="lg"
      sx={{ textAlign: "center" }}
    >
      <DialogContent sx={{ padding: "24px" }}>
        <DialogContentText
          sx={{
            fontSize: "20px",
            fontWeight: "500",
            marginBottom: "3%",
            textAlign: "center",
            width: "100%",
          }}
        >
          Enter the following details:
        </DialogContentText>
        <TextField
          placeholder="Form Name"
          value={formName}
          onChange={handleNameChange}
          fullWidth
          sx={{
            maxWidth: "50%",
            backgroundColor: "#fff",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#ccc",
              },
              "&:hover fieldset": {
                borderColor: "#7d2d91",
              },
            },
          }}
        />
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center", padding: "16px" }}>
        <Button
          onClick={handleCreateForm}
          variant="contained"
          disabled={!formName.trim() || isCreating}
          sx={{
            backgroundColor: "#7d2d91",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#5a1f6b",
            },
            "&:disabled": {
              backgroundColor: "#e0e0e0",
            },
          }}
        >
          {isCreating ? "Creating..." : "Create Form"}
        </Button>
        <Button
          onClick={handleClose}
          variant="outlined"
          disabled={isCreating}
          sx={{
            color: "#7d2d91",
            borderColor: "#7d2d91",
            "&:hover": {
              borderColor: "#5a1f6b",
            },
          }}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateFormBox;
