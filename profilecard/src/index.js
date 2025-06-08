import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="wallpaper.jpg" alt="" />;
}

function Intro() {
  return (
    <div>
      <h1>R2D2</h1>
      <p>
        Full stack Full stackFull stackFull stackFull stackFull stackFull stack
        Full stackFull stackFull stackFull stack Full stackFull stack
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill progL="HTML+CSS" emoji="😘" color="green" />
      <Skill progL="React" emoji=" 	😚" color="red" />
      <Skill progL="Svelte" emoji="🥸" color="orange" />
      <Skill progL="Java" emoji="🥹" color="teal" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.progL}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
