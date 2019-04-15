import React from "react";
import data from "./components/data";
import Header from "./components/Header";
import Body from "./components/Body";

class Resume extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resume: "",
      loading: true
    };
  }

  componentDidMount() {
    // const data = data
    this.setState({
      resume: data,
      loading: false
    });
  }

  render() {
    const { loading, resume } = this.state;
    if (loading === true) {
      return <h1> Loading </h1>;
    }
    return (
      <div className="resume-container">
        <div className="resume">
          <Header
            name={resume.name}
            blurb={resume.blurb}
            links={resume.links}
          />
          <Body experiences={resume.experiences} />
        </div>
      </div>
    );
  }
}

export default Resume;
