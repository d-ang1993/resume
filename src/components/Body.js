import React from "react";
import Experiences from "./Experiences";
import "./Body.scss"

class Body extends React.Component {
  render() {
    const { experiences } = this.props;
    return (
      <div className="body">
        <div className="left column">
          {experiences.map(experience => {
            return (
              <Experiences
                title={experience.title}
                timestamp={experience.timestamp}
                points={experience.timestamp}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

export default Body;
