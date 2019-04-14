import React from 'react'
import './Header.scss'

class Header extends React.Component {
  render(){
    const { name, blurb, links } = this.props
    return(
      <div className="header">
        {console.log(links)}
        {name}
      </div>
    )
  }
}

export default Header
