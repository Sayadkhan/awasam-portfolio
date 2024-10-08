import React, { FC, ReactNode } from "react";

interface inputProps {
  icon?: ReactNode;
  placeholder: string;
  type?: "email" | "text" | "password";
}

const Input: FC<inputProps> = ({ icon, placeholder, type }) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
        {icon}
      </div>

      <input
        type={type}
        placeholder={placeholder}
        className="bg-primary-background text-primary-foreground rounded-md text-sm ps-10 px-2.5 py-4 focus:outline-none w-full"
      />
    </div>
  );
};

export default Input;
