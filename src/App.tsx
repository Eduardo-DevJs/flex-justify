import { useReducer } from "react";
import Container from "./components/Container";
import Square from "./components/Square";
import { Action, State } from "./types/types";
import Button from "./components/Button";

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "justify-end":
      return { flexDirection: "justify-end" };
    case "justify-center":
      return { flexDirection: "justify-center" };
    case "justify-start":
      return { flexDirection: "justify-start" };
    case "justify-between":
      return { flexDirection: "justify-between" };
    case "justify-evenly":
      return { flexDirection: "justify-evenly" };
    case "justify-around":
      return { flexDirection: "justify-around" };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    flexDirection: "justify-start",
  });

  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <h1 className="w-full text-center text-3xl mb-4 font-medium">Justify-content: {state.flexDirection}</h1>
        <Container
          style={{ width: "750px" }}
          className={`p-4 flex ${state.flexDirection} gap-2 items-center border-2 border-gray-500 rounded-md`}
        >
          <Square>Item 1</Square>
          <Square>Item 2</Square>
          <Square>Item 3</Square>
        </Container>
        <div className="flex items-center gap-px justify-between flex-wrap">
          <Button onClick={() => dispatch({ type: "justify-start" })}>
            flex-start
          </Button>
          <Button onClick={() => dispatch({ type: "justify-end" })}>
            flex-end
          </Button>
          <Button onClick={() => dispatch({ type: "justify-center" })}>
            justify-center
          </Button>
          <Button onClick={() => dispatch({ type: "justify-around" })}>
            space-around
          </Button>
          <Button onClick={() => dispatch({ type: "justify-between" })}>
            space-between
          </Button>
          <Button onClick={() => dispatch({ type: "justify-evenly" })}>
            space-evenly
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
