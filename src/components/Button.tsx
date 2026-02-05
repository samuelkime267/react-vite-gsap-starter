import { cn } from "@/lib/utils";
import React from "react";

type ButtonType = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  btnType?: ButtonType;
}

const BtnType: Record<ButtonType, string> = {
  primary:
    "w-full bg-pri text-white py-2 px-4 rounded-sm hover:bg-sec duration-300 transition-colors hover:cursor-pointer flex items-center justify-center gap-2 capitalize",
  secondary:
    "w-full bg-pri text-white py-2 px-4 rounded-sm hover:bg-sec duration-300 transition-colors hover:cursor-pointer flex items-center justify-center gap-2 capitalize",
};

export default function Button({
  children,
  className,
  btnType,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn("cursor-pointer", btnType && BtnType[btnType], className)}
      {...props}
    >
      {children}
    </button>
  );
}
