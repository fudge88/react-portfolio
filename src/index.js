import ReactDOM from "react-dom";
import App from "./App";
import { ModeProvider } from "./context";

ReactDOM.render(
  <ModeProvider>
    <App />,
  </ModeProvider>,
  document.getElementById("root")
);
