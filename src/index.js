import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Answer from "./pages/Answer";
import Question from "./pages/Question";
import Result from "./pages/Result";
import "./reset.css";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="answer" element={<Answer />} />
      <Route path="question" element={<Question />} />
      <Route path="result" element={<Result />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root"),
);
