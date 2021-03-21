import React from 'react';

class HornedBeasts extends React.Component {
  render() {
    return (
      <div className="beastContainer">
        <h2 className="title">{this.props.title}</h2>
        <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="Beast" title="Beast"></img>
        <p className="description">{this.props.description}</p>
      </div>
    );
  }
}

export default HornedBeasts;
