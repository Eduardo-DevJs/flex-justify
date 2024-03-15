import { ComponentProps } from "react";

type ContainerProps = ComponentProps<"div">;

export default function Container({ children, ...props }: ContainerProps) {
  return <div {...props}>{children}</div>;
}
