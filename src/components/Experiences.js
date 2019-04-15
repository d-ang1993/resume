import React from "react";

const Experiences = props => {
  const { title, timestamp, points } = props;
  return (
    <div className="container experience">
      <h2 className="title">{title}</h2>
      <h3 className="location time">{timestamp}</h3>
      <p className="points">
        {points.map(point => {
          return (
            <ul>
              <li>{point}</li>
            </ul>
          );
        })}
      </p>
    </div>
  );
};

export default Experiences;
