import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import "./styles.css";

const skills = [
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
  return <img className="avatar" src="webcam-toy.jpg" alt="avatar"></img>;
}

function Intro() {
  return (
    <div>
      <h1>Giselalala</h1>
      <p>bro what</p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((skills) => (
        <Skill skillObj={skills}></Skill>
      ))}

      {/* {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
        ></Skill>
      ))} */}
    </ul>
  );
}

function Skill({ skillObj }) {
  return (
    <div
      className="skill"
      style={{
        backgroundColor: skillObj.color,
        padding: "3px 6px",
        borderRadius: "5px",
      }}
    >
      <p>{skillObj.skill}</p>
      <span>
        {skillObj.level === "advanced" && "💪"}
        {skillObj.level === "intermediate" && "👍"}
        {skillObj.level === "beginner" && "👶"}
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
