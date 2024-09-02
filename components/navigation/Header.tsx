import React from "react";
import Profile from "../ui/Profile";
import FancyButton from "../ui/FancyButton";
import MagnaticWrapper from "../visualEffect/MagnaticWrapper";
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-center md:justify-between">
      <Profile />
      <div className="hidden md:inline">
        <MagnaticWrapper>
          <FancyButton text="Contract Me" icon={<FaArrowRight />} />
        </MagnaticWrapper>
      </div>
    </div>
  );
};

export default Header;
