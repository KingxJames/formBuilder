import React from "react";
import { useDroppable } from "@dnd-kit/core";

interface DroppableProps {
  id: string | number;
  children: React.ReactNode;
  disabled?: boolean; // New prop to optionally disable dropping
}

export function Droppable({ id, children, disabled = false }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id,
    disabled, // Disable dropping if needed (useful for nested droppables)
  });

  const style: React.CSSProperties = {
    width: "100%",
    minHeight: "100px",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch", // Changed from "center" for better item alignment
    justifyContent: "flex-start",
    backgroundColor: isOver ? "rgba(0, 255, 0, 0.1)" : "transparent",
    border: isOver ? "2px dashed green" : "1px dashed #ccc",
    borderRadius: "4px",
    transition: "background-color 0.2s, border 0.2s",
    boxSizing: "border-box",
    gap: "8px", // Added for consistent spacing between items
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}

export default Droppable;
