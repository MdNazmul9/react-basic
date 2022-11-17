import React, { useState } from "react";

import "./App.css";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";

const App = () => {
  const [courseGoals, setcourseGoals] = useState([
    { text: "Create Consumer account", id: "g1" },
    { text: "Create Root consumer Account", id: "g2" },
  ]);

  const addGoalHandler = (enteredText) => {
    setcourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      console.log("updatedGoals: ", updatedGoals);
      return updatedGoals;
    });
  };

  const deleteItemHandeler = (goalId) => {
    setcourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter(
        (goal) => DOMRectReadOnly.id !== goalId
      );
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}> No goals found Maybe Add one</p>
  );

  if (courseGoals.length > 0) {
    content = <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandeler}/>;
  }

  return (
    <div>
      <h1>Welcome to Ehsan Marketing.</h1>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
};

export default App;
