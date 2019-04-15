import React from "react";
import Experiences from "./Experiences";
import Projects from "./Projects";
import "./Body.scss";

class Body extends React.Component {
  render() {
    const { experiences, projects } = this.props;
    return (
      <div className="body">
        <div className="column left">
          <div className="section-line experience">
            <h2 className="section experience">Experiences</h2>
          </div>
          <div>
            {experiences.map(experience => {
              return (
                <Experiences
                  title={experience.title}
                  timestamp={experience.timestamp}
                  points={experience.points}
                />
              );
            })}
          </div>
          <div className="section-line project">
            <h2 className="section project">Projects</h2>
          </div>
          <div>
            {projects.map(project => {
              return (
                <Projects
                  title={project.title}
                  description={project.description}
                  url={project.url}
                  points={project.points}
                />
              );
            })}
          </div>
        </div>
        <div className="column right">
          <h1>Right</h1>
        </div>
      </div>
    );
  }
}

export default Body;
