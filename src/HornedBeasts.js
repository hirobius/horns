import React from 'react';

class HornedBeasts extends React.Component {
  render() {
    return (
      <div className="beastContainer">
        <h2 className="name">{this.props.name}</h2>
        <img title={this.props.title} src ={this.props.src} alt={this.props.alt}></img>
        <p className="description">{this.props.description}</p>
      </div>
    );
  }
}

export default HornedBeasts;
