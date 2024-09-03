import React, { FC } from "react";

interface headingInterface {
  number: number;
  title_1: string;
  title_2: string;
}

const Heading: FC<headingInterface> = ({ number, title_1, title_2 }) => {
  return (
    <div className="relative my-10 px-8 z-20">
      <div className="outline-none flex flex-col justify-start shrink-0 opacity-5 transform -top-32 2xl:-top-24 w-[71px] flex-none h-auto left-4"></div>
    </div>
  );
};

export default Heading;
