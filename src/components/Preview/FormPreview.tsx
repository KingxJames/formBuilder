import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Workflow } from "../../commons/workflow/workflow";
import { TextFieldComponent } from "../../commons/TextField/TextFieldComponent";
import { Notes } from "../../commons/Notes/Notes";
import { UBDatePicker } from "../../commons/DatePicker/DatePicker";
import { Time } from "../../commons/Time/Time";
import { UBRadio } from "../../commons/Radio/Radio";
import { UBDropDown } from "../../commons/DropDown/DropDown";
import { UBCheckBox } from "../../commons/CheckBox/CheckBox";
import { UBSignature } from "../../commons/Signature/Signature";
import { UBUpload } from "../../commons/Upload/UBUpload";
import React from "react";

// Define or import the FormComponent type
interface FormComponent {
  id: string;
  type: string;
}

export const FormPreview: React.FC<{
  open: boolean;
  onClose: () => void;
  components: FormComponent[];
}> = ({ open, onClose, components }) => {
  const renderPreviewElement = (type: string) => {
    switch (type) {
      case "textField":
        return <TextFieldComponent />;
      default:
        return renderElement(type);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        Form Preview
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 3 }}>
          {components.map((component) => (
            <Box key={component.id}>{renderPreviewElement(component.type)}</Box>
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default FormPreview;
function renderElement(type: string) {
  switch (type) {
    case "workflow":
      return <Workflow />;
    case "textField":
      return <TextFieldComponent />;
    case "notes":
      return <Notes />;
    case "datePicker":
      return <UBDatePicker />;
    case "time":
      return <Time />;
    case "Radio":
      return <UBRadio />;
    case "Dropdown":
      return <UBDropDown />;
    case "CheckBox":
      return <UBCheckBox />;
    case "Signature":
      return <UBSignature />;
    case "Upload":
      return <UBUpload />;
    default:
      return <div>Unsupported component type: {type}</div>;
  }
}
