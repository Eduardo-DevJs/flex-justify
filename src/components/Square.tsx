import { PropsWithChildren } from "react";

type SquareProps = PropsWithChildren;

export default function Square({ children }: SquareProps) {
  return (
    <div className="bg-slate-800 text-white font-bold text-xl p-4 rounded">
      {children}
    </div>
  );
}
