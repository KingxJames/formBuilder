import React from "react";
import { useDraggable } from "@dnd-kit/core";

interface DraggableProps {
  id: string;
  children: React.ReactNode;
}

export function Draggable({ id, children }: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style: React.CSSProperties = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    cursor: "grab", // Indicates draggable behavior
    width: "100%",
    height: "50px",
    border: "1px solid #ccc",
    borderRadius: "2px",
    background: "#fff",
    boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    fontSize: "14px",
    marginBottom: "20%",
    transition: "background 0.2s ease-in-out",
    userSelect: "none", // Prevents text selection during drag
  };

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </button>
  );
}

export default Draggable;
