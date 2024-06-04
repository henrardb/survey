import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import store from "./store/store.js";
import { Provider } from "react-redux";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

import AllQuestions from "./pages/AllQuestions.jsx";
import AskQuestion from "./pages/AskQuestion.jsx";
import EditQuestion from "./pages/EditQuestion.jsx";
import ShowQuestion from "./pages/ShowQuestion.jsx";

import AllEvents from "./pages/AllEvents.jsx";
import Event from "./pages/Event.jsx";

import Participate from "./pages/Participate.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      <Route path="all-questions" element={<AllQuestions />} />
      <Route path="ask-question" element={<AskQuestion />} />
      <Route path="edit-question/:questionId" element={<EditQuestion />} />
      <Route path="show-question/:questionID" element={<ShowQuestion />} />

      <Route path="all-events" element={<AllEvents />} />
      <Route path="event/:eventId" element={<Event />} />

      <Route path="participate/:questionID" element={<Participate />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
