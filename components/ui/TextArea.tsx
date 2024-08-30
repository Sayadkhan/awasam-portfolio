import React, { FC, ReactNode } from "react";

interface TextAreaProps {
  icon?: ReactNode;
  placeholder: string;
}

const TextArea: FC<TextAreaProps> = ({ icon, placeholder }) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
        {icon}
      </div>

      <textarea
        placeholder={placeholder}
        className="bg-primary-background text-primary-foreground rounded-md text-sm ps-10 px-2.5 py-9 focus:outline-none w-full"
      />
    </div>
  );
};

export default TextArea;
