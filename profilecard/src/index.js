import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const listOfSkills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

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
  const skill = listOfSkills;
  const numSkill = skill.length;

  return (
    <>
      {numSkill > 0 && (
        <div className="skill-list">
          {skill.map((skill) => (
            <Skill skillObj={skill} key={skill.skill} />
          ))}
        </div>
      )}
    </>
  );
}

function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>
        {skillObj.level === "beginner" && "😇"}
        {skillObj.level === "intermediate" && "😍"}
        {skillObj.level === "advanced" && "🤨"}
      </span>
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
