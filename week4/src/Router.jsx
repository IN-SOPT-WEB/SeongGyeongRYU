import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import React from "react";
import Search from "./Search";
import UserInfo from "./UserInfo";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/search/:username" element={<UserInfo />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
