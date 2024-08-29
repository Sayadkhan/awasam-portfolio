import { cn } from "@/lib/utils";
import React, { FC, ReactNode } from "react";

interface CardPorps {
  title?: string;
  children: ReactNode;
  className?: string;
}

const Card: FC<CardPorps> = ({ title, children, className }) => {
  return (
    <div
      className={cn(
        "relative bg-primary-background w-full h-fit rounded-2xl border border-border p-6 text-primary-foreground overflow-hidden",
        className
      )}
    >
      <div className="flex flex-col gap-y-6">
        {title ? (
          <div>
            <p className="uppercase text-lg">{title}</p>
          </div>
        ) : null}

        {children}
      </div>
    </div>
  );
};

export default Card;
