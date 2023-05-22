import React, { ReactNode } from "react";
import "../App.css";

interface ButtonProps {
  variant: "big" | "small";
  children: ReactNode;
  onClick: () => void;
}

function Button({ variant, onClick, children }: ButtonProps) {
  const big = "bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ease-in duration-150 shadow-[inset_-12px_-8px_40px_#46464620] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]";
  
  const small = "rounded-lg bg-pink-500 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40";
 
  // Determine the class name based on the variant
  const buttonClass = variant === "big" ? big : small;

  return (
    <div>
      <button className={buttonClass} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default Button;
