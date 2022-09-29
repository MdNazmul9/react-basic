import React, { useState } from "react";

import Button from "../../UI/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandeler = (event) => {
    if (event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);

  };

  const formSubmitHandeler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length ===0){
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };


 
  return (
    <form onSubmit={formSubmitHandeler}>
      <div className="form-control">
        <label style={{color: !isValid ? 'red':'black' }} className="form-control label" >Course Goal</label>
        <input style={{borderColor: !isValid ? 'red':'black',  borderColor: !isValid ? 'salmon':'transparent'}} type="text" onChange={goalInputChangeHandeler} />
      </div>
      <Button type="submit"> Add Goal </Button>
    </form>
  );
};

export default CourseInput;
