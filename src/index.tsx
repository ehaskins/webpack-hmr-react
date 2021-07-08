import * as React from "react";
import * as ReactDOM from "react-dom";

let rootElement = document.body.appendChild(document.createElement("div"));
rootElement.id = "root";

async function render() {
  const { App } = await import("./App");

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
}

render();

if (module.hot) {
  module.hot.accept("./App", () => render());
}
