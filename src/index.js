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
        <SkillList
          skill1="HTML + CSS 💪"
          skill2="JavaScript 💪"
          skill3="Web Design 💪"
          skill4="Git and GitHub 💪"
          skill5="React 💪"
          skill6="Svelte 💪"
        />
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

function SkillList(props) {
  return (
    <div className="skill-list">
      <p
        style={{
          backgroundColor: "lightblue",
          padding: "3px 6px",
          borderRadius: "5px",
        }}
      >
        {props.skill1}
      </p>
      <p
        style={{
          backgroundColor: "lightyellow",
          padding: "3px 6px",
          borderRadius: "5px",
        }}
      >
        {props.skill2}
      </p>
      <p
        style={{
          backgroundColor: "lightgreen",
          padding: "3px 6px",
          borderRadius: "5px",
        }}
      >
        {props.skill3}
      </p>
      <p
        style={{
          backgroundColor: "coral",
          padding: "3px 6px",
          borderRadius: "5px",
        }}
      >
        {props.skill4}
      </p>
      <p
        style={{
          backgroundColor: "lightcyan",
          padding: "3px 6px",
          borderRadius: "5px",
        }}
      >
        {props.skill5}
      </p>
      <p
        style={{
          backgroundColor: "red",
          padding: "3px 6px",
          borderRadius: "5px",
        }}
      >
        {props.skill6}
      </p>
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
