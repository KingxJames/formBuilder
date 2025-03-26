// SortableItem.tsx
import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export const SortableItem = ({ id, children }: { id: string; children: React.ReactNode }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    width: '100%',
  };

  return (
    <div ref={setNodeRef} style={style}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          // Clone the child and add the drag handle props to the DragIndicatorIcon
          return React.cloneElement(child, {
            ...attributes,
            ...listeners,
          });
        }
        return child;
      })}
    </div>
  );
};