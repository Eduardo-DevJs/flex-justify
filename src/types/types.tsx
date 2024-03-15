export type State = {
  flexDirection: string;
};

export type Action =
  | { type: "justify-end" }
  | { type: "justify-center" }
  | { type: "justify-between" }
  | { type: "justify-around" }
  | { type: "justify-evenly" }
  | { type: "justify-start" };
