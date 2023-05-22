import React, { useState } from "react";
import Button from "./Button";
import CheckBox from "./CheckBox";

interface TodoRowProps {
  label: string;
  onDelete: () => void;
}

function TodoRow({ onDelete, label }: TodoRowProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverLeave = () => {
    setIsHovered(false);
  };

  const handleToggle = () => {
    setCompleted(!completed);
  };

  return (
    <>
      <li
        className="flex justify-between items-center content-between  bg-slate-100  m-4 p-3 rounded-md "
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverLeave}
      >
        {/* CheckBox component */}
        <CheckBox
          label={label}
          completed={completed}
          onToggle={handleToggle}
        />

        {/* Display Button if hover is true */}
        {isHovered && (
          <Button variant="small" onClick={onDelete}>
            x
          </Button>
        )}

      </li>
    </>
  );
}

export default TodoRow;
