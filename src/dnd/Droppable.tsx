import React from "react";
import { useDroppable } from "@dnd-kit/core";

interface DroppableProps {
  id: string | number;
  children: React.ReactNode;
}

export function Droppable({ id, children }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id, // Use the provided id instead of hardcoding "droppable"
  });

  const style: React.CSSProperties = {
    color: isOver ? "green" : undefined,
    width: "90%", // Ensure the droppable area takes full width
    minHeight: "100px", // Ensures droppable area is visible even when empty
    padding: "5%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start", // Align children at the top
    margin: "-0.5%",
    boxSizing: "border-box", // Ensure padding and border are included in the width/height
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}

export default Droppable;