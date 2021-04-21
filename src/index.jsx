import App from "./components/App";
import Modal from "react-modal";
import ReactDOM from "react-dom";
import * as React from "react";
import { QuestionsContextProvider } from "./contexts/Questions";
import { SearchContextProvider } from "./contexts/Search";
import { AuthContextProvider } from "./contexts/Auth";
import { ToastProvider } from "react-toast-notifications";

import "./index.css";

Modal.setAppElement("#root");

ReactDOM.render(
  <AuthContextProvider>
    <ToastProvider placement="bottom-center">
      <QuestionsContextProvider>
        <SearchContextProvider>
          <App />
        </SearchContextProvider>
      </QuestionsContextProvider>
    </ToastProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);
