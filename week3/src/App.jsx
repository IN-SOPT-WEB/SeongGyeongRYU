import React from "react";
import Header from "./components/header";
import Nav from "./components/nav";
import ClockExample from "./components/clockExample";

export default function App() {
  return (
    <div>
      <Header name="성경" />
      <Nav />
      <ClockExample />
    </div>
  );
}
