import App from "./components/App";
import { QuestionsContextProvider } from "./contexts/Questions";
import { SearchContextProvider } from "./contexts/Search";
import { ToastProvider } from "react-toast-notifications";
import * as React from "react";
import ReactDOM from "react-dom";

import "./index.css";

ReactDOM.render(
  <ToastProvider placement="bottom-center">
    <QuestionsContextProvider>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </QuestionsContextProvider>
  </ToastProvider>,
  document.getElementById("root")
);
