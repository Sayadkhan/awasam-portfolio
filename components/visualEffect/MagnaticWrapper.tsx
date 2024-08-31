"use client";

import { FC, ReactNode, useRef, useState } from "react";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagnaticWrapperProps {
  className?: string;
  children: ReactNode;
}

const MagnaticWrapper: FC<MagnaticWrapperProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [postion, setPostion] = useState({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent) => {
    const { clientX, clientY } = e;

    const boundingRect = ref.current?.getBoundingClientRect();

    if (boundingRect) {
      const { width, height, top, left } = boundingRect;
      const middlex = clientX - (left + width / 2);
      const middley = clientY - (top + height / 2);
      setPostion({ x: middlex, y: middley });
    }
  };
  const reste = () => {
    setPostion({ x: 0, y: 0 });
  };

  const { x, y } = postion;
  return (
    <motion.div
      className={cn("relative", className)}
      ref={ref}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouse}
      onMouseLeave={reste}
    >
      {children}
    </motion.div>
  );
};

export default MagnaticWrapper;
