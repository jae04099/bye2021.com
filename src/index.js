import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "./App";
import Answer from "./pages/Answer";
import Result from "./pages/Result";
import "./reset.css";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

ReactDOM.render(
  <BrowserRouter>
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="answer" element={<Answer />} />
        <Route path="result" element={<Result />} />
      </Routes>
    </RecoilRoot>
  </BrowserRouter>,
  document.getElementById("root"),
);
