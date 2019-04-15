import React from "react";
import "./Header.scss";

class Header extends React.Component {
  render() {
    const { name, blurb, links } = this.props;
    return (
      <div className="header">
        <div className="panel left">
          <h1 className="name">{name}</h1>
          <p className="blurb">{blurb}</p>
        </div>
        <div className="panel right">
          {links.map((link, id) => {
            return (
              <ul key={id}>
                <li className="link">
                  <a href={link.url}>
                    {link.title} {link.icon}
                  </a>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Header;
