import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-slate-800 py-2 px-5 rounded text-white mt-4"
    >
      {children}
    </button>
  );
}
