import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="wheat" />
      <Skill skill="JavaScript" emoji="💪" color="lightblue" />
      <Skill skill="Web Design" emoji="💪" color="orange" />
      <Skill skill="Git and GitHub" emoji="💪" color="lightyellow" />
      <Skill skill="React" emoji="💪" color="coral" />
      <Skill skill="Svelte" emoji="💪" color="lightgreen" />
    </div>
  );
}

function Skill(props) {
  return (
    <div
      style={{
        backgroundColor: props.color,
        padding: "3px 6px",
        borderRadius: "5px",
      }}
      className="skill"
    >
      <span>{props.skill}</span>
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
