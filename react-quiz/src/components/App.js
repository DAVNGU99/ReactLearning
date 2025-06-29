import { useEffect, useReducer } from "react";
import DateCounter from "./DateCounter";
import Loader from "./Loader";
import Error from "./Error";

import Header from "./Header";
import Main from "./Main";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "../NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";

export default function App() {
  const initialState = {
    questions: [],

    //"loading", "error", "ready", "active", "finished"

    status: "loading",
    index: 0,
    answer: null,
    points: 0,
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

      case "newAnswer": {
        const question = state.questions.at(state.index);
        const isCorrect = action.payload === question.correctOption;

        return {
          ...state,
          answer: action.payload,
          points: isCorrect ? question.points : state.points,
        };
      }
      case "nextQuestion":
        return {
          ...state,
          index: state.index + 1,
          answer: null,
        };

      case "finished":
        return {
          ...state,
          status: "finished",
        };
      case "restart":
        return {
          ...state,
          status: "active",
          index: 0,
          answer: null,
          points: 0,
        };

      default:
        throw new Error("Action unknown");
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, index, answer, points } = state;

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, curr) => prev + curr.points,
    0
  );

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Main>
        <Header />
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              maxPossiblePoints={maxPossiblePoints}
              index={index}
              numQuestions={numQuestions}
              points={points}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextButton
              dispatch={dispatch}
              answer={answer}
              numQuestions={numQuestions}
              index={index}
            />
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}
