import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Search from "./Search";
import UserInfo from "./UserInfo";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<Search />}>
            <Route path=":username" element={<UserInfo />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
