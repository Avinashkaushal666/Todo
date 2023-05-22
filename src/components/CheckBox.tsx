import React, { useState } from "react";

interface CheckBoxProps {
  completed: boolean;
  label: string;
  onToggle: () => void;
}

function CheckBox({ label, onToggle, completed }: CheckBoxProps) {
  const [isChecked, setIsChecked] = useState(completed);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    onToggle();
  };

  const textDecorationClass = completed ? "line-through text-green-600 transition" : "";

  return (
    <label className="flex pt-2 items-center">
      <input
        type="checkbox"
        className="appearance-none border-2 border-gray-300 checked:bg-green-600 checked:border-transparent focus:outline-none h-5 w-5 mr-4 rounded-full transition flex-shrink-0"
        onChange={handleToggle}
      />
      <div className="flex-grow">
        <span className={`text-lg text-gray-700 ${textDecorationClass}`}>{label}</span>
      </div>
    </label>
  );
}

export default CheckBox;
