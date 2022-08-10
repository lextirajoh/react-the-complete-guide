import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

export default function CourseGoalList({courseGoals, deleteItemHandler}) {
  return (
    <ul className="goal-list">
      {courseGoals.map(goal => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={deleteItemHandler}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};
