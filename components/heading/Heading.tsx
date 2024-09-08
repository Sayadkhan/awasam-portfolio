import React, { FC } from "react";
import SvgCurve from "../visualEffect/SvgCurve";
import { HeadingAnimatedSvg } from "./HeadingAnimatedSvg";

interface headingInterface {
  number: number;
  title_1: string;
  title_2: string;
}

const Heading: FC<headingInterface> = ({ number, title_1, title_2 }) => {
  return (
    <div className="relative my-10 px-8 z-20">
      <div className="outline-none flex flex-col absolute justify-start shrink-0 opacity-5 transform -top-32 2xl:-top-24 w-[71px] flex-none h-auto left-4">
        <h2 className="font-pixle text-[180px] text-center text-primary-foreground relative">
          <span className="bottom_fade bg-clip-text text-transparent p-4">
            {number}
          </span>
        </h2>
      </div>

      <div className="flex items-center flex-nowrap min-h-min p-0 w-full font-oswald overflow-hidden ">
        <p className="text-[17vw] lg:text-[12vw] leading-[100%] text-primary-foreground mr-3">
          {title_1}
        </p>
        <HeadingAnimatedSvg text="LEARN MORE ABOUT MY PROJECTS" />
        <p className="text-[17vw] lg:text-[12vw] leading-[100%] text-primary-foreground italic">
          {title_2}
        </p>
      </div>
      <SvgCurve />
    </div>
  );
};

export default Heading;
