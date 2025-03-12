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
    minHeight: "100px", // Ensures droppable area is visible
    border: "1px dashed gray",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}

export default Droppable;
