import React from 'react';

export default function CourseCard({ data }) {
  return (
    <div className="course-card">
      <img src={data.img} alt={data.name} />
      <h3>{data.name}</h3>
      <p>Duration: {data.duration}</p>
      <p>Price: {data.price}</p>
    </div>
  );
}