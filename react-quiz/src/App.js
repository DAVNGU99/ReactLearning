import { useEffect, useReducer } from "react";
import DateCounter from "./DateCounter";
import Loader from "./Loader";
import Error from "./Error";

import Header from "./Header";
import Main from "./Main";
import StartScreen from "./StartScreen";
import Question from "./Question";

export default function App() {
  const initialState = {
    questions: [],

    //"loading", "error", "ready", "active", "finished"

    status: "loading",
    index: 0,
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
      case "start":
        return { ...state, status: "active" };

      default:
        throw new Error("Action unknown");
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, index } = state;

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
      {status === "ready" && (
        <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
      )}
      {status === "active" && <Question question={questions[index]} />}

      <Main></Main>
    </div>
  );
}
