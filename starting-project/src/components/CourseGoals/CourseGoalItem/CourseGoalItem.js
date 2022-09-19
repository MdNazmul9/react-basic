import React from 'react'

import './CourseGoalItem.css';

const CourseGoalItem = (props) => {

    const deleteHandeler = () =>{
        props.onDelete(props.id)
    };

  return (
   <li className='goal-item' onClick={deleteHandeler}>
    {props.children}
   </li>
  )
}

export default CourseGoalItem
