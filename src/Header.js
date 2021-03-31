import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Horned Beasts</h1>
        {/* username as props from App.js form... */}
        {/* <h2>Hello, {this.props.username}</h2> */}
      </div>);
  }
}

export default Header;
