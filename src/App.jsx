import React, { Component } from 'react';
import CourseCard from './CourseCard.jsx';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      courses: [
        { name: "Data Structures and Algorithms", duration: "40hrs", price: "Rs 100", img: "1.png" },
        { name: "ReactJS", duration: "30hrs", price: "Rs 200", img: "2.png" },
        { name: "NodeJS", duration: "25hrs", price: "Rs 150", img: "3.png" },
        { name: "JavaScript", duration: "35hrs", price: "Rs 130", img: "4.png" },
      ]
    };
  }

  render() {
    const { courses } = this.state;

    return (
      <div className="app">
        <div className="header">Course Catalog - 2500040223</div>

        <div className="section">
          {courses.map((course, index) => (
            <CourseCard key={index} data={course} />
          ))}
        </div>

        <div className="footer">
          © CopyRight@2026 Course Catalog. All rights reserved - Manikanta
        </div>
      </div>
    );
  }
}