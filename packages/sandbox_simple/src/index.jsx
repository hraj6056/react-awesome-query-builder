import React from "react";
import { render } from "react-dom";
import Demo from "./demo";

import "@314e-react-awesome-query-builder/ui/css/styles.scss";

function App() {
  return (
    <div className="App">
      <Demo />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);

