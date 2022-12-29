import React from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyles";

export default function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Content />
    </div>
  );
}
