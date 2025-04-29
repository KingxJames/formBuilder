import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { TextFieldComponent } from "../TextField/TextFieldComponent";
import { Notes } from "../Notes/Notes";
import { UBDatePicker } from "../DatePicker/DatePicker";
import { Time } from "../Time/Time";
import { UBRadio } from "../Radio/Radio";
import { UBDropDown } from "../DropDown/DropDown";
import { UBCheckBox } from "../CheckBox/CheckBox";
import { UBSignature } from "../Signature/Signature";
import { UBUpload } from "../Upload/UBUpload";
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
  const [componentData, setComponentData] = useState<Record<string, string>>(
    {}
  );
  const [isPreviewMode, setIsPreviewMode] = useState(true);

  const handleDescriptionChange = (id: string, description: string) => {
    setComponentData((prev) => ({ ...prev, [id]: description }));
  };

  const renderElement = (component: FormComponent) => {
    switch (component.type) {
      case "textField":
        return (
          <TextFieldComponent
            key={component.id}
            preview={isPreviewMode}
            initialDescription={componentData[component.id] || "description"}
            onDescriptionChange={(desc) =>
              handleDescriptionChange(component.id, desc)
            }
          />
        );
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
        return <div>Unsupported component type: {component.type}</div>;
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        {isPreviewMode ? "Form Preview" : "Form Editor"}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            onClick={onClose}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 3 }}>
          {components.map((component) => (
            <Box key={component.id}>{renderElement(component)}</Box>
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default FormPreview;
// function renderElement(type: string) {
//   switch (type) {
//     case "workflow":
//       return <Workflow />;
//     case "textField":
//       return <TextFieldComponent />;
//     case "notes":
//       return <Notes />;
//     case "datePicker":
//       return <UBDatePicker />;
//     case "time":
//       return <Time />;
//     case "Radio":
//       return <UBRadio />;
//     case "Dropdown":
//       return <UBDropDown />;
//     case "CheckBox":
//       return <UBCheckBox />;
//     case "Signature":
//       return <UBSignature />;
//     case "Upload":
//       return <UBUpload />;
//     default:
//       return <div>Unsupported component type: {type}</div>;
//   }
// }
