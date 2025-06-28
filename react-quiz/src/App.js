import { useEffect, useReducer } from "react";
import DateCounter from "./DateCounter";
import Loader from "./Loader";
import Error from "./Error";

import Header from "./Header";
import Main from "./Main";
import StartScreen from "./StartScreen";

export default function App() {
  const initialState = {
    questions: [],

    //"loading", "error", "ready", "active", "finished"

    status: "loading",
  };

  function reducer(state, action) {
    switch (action.type) {
      case "dataReceived":
        return { ...state, questions: action.payload, status: "ready" };

      case "dataFailed":
        return {
          ...state,
          status: "error",
        };

      default:
        throw new Error("Action unknown");
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status } = state;

  const numQuestions = questions.length;

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && <StartScreen numQuestions={numQuestions} />}

      <Main></Main>
    </div>
  );
}
