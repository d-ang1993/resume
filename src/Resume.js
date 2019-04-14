import React from 'react'
import data from './components/data'
import Header from './components/Header'

class Resume extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      resume: "",
    }
  }

  componentDidMount() {
    this.setState({
      resume: data
    })
  }

  render(){
    const { resume } = this.state
    return(
      <div className="resume-container">
        <Header
          name={resume.name}
          blurb={resume.blurb}
          links={resume.links}
        />
      </div>
    )
  }
}

export default Resume
