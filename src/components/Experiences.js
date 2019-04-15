import React from 'react';

const Experiences = (props) => {
  const { title, timestamp, points } = props
    return(
      <div>
        <h1>{title}</h1>
        <h1>{timestamp}</h1>
        <h1>{points.map(point=>{
          return (
          <ul>
            <li>{point}</li>
          </ul>)
        })}</h1>
      </div>
    )

}

export default Experiences
