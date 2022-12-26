import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import SearchInput from "./components/SearchInput";
import Result from "./components/Result";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="search" element={<SearchInput />}>
            <Route path=":username" element={<Result />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
