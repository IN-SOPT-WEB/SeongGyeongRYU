import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./GlobalStyles";

import App from "./App";

// 개발환경인 경우에는 mocks 내부의 browser에서 worker를 가져와서 실행한다
// mock를 사용하지 않고 일반적인 API을 사용하려면 위의 3줄만 지우면 mock이 작동하지 않음
if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
