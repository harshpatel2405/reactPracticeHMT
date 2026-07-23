/*
 * Project 1 - Student Profile Card
 * Scenario
 *
 * A college website wants to display information about students.
 *
 * Requirements
 *
 * Create a component named StudentCard.
 *
 * The parent component should send the following data using * props:
 *
 * Student Name
 * Roll Number
 * Department
 * Semester
 * CGPA
 *
 * Display all details inside a card.
 *
 * If CGPA is greater than or equal to 8, display
 *
 * Excellent Student
 *
 * Otherwise display
 *
 * Keep Improving
 *
 * Display at least 5 StudentCard components using different * data.
 *
 * Concepts Used
 * Component
 * Props
 * Conditional Rendering
 */
import React from "react";

const StudentProfileCard = (data) => {
  return (
    <div className="card text-center">
      <div className="card-header">Name = {data.d.name}</div>
      <div className="card-body">
        <h5 className="card-title">Roll Number = {data.d.rollNumber}</h5>
        <p className="card-text">Department = {data.d.dept}</p>
        <a href="#" className="btn btn-primary">
          Semester = {data.d.sem}
        </a>
      </div>
      <div className="card-footer text-body-secondary">
        CGPA = {data.d.cgpa}(
        {data.d.cgpa > 8 ? "Excellent Student" : "Keep Improving"})
      </div>
    </div>
  );
};

export default StudentProfileCard;

