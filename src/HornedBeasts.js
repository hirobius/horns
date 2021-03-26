import React from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    // add in an event handler
    // make it work and render!!

    this.state = {
      favoritesCounter: 1,
    };
  }

  handleHover = (e) => {
    e.target.style.color = 'red';
    e.target.style.cursor = 'pointer';
  }
  handleLeave = (e) => e.target.style.color = 'royalblue'

  favoritedClick = () => {
    console.log('favoritedClick!');
    // sadly, we cannot just write:
    // this.state.favoritesCounter++
    // instead, we write:
    this.setState({
      favoritesCounter: this.state.favoritesCounter + 1
    });
  }

  render() {
    return (
      <Card className="beast-cards" >
        <h2 className="beast-name">{this.props.title}</h2>
        <img onClick={this.favoritedClick} title={this.props.title} src={this.props.src} alt={this.props.alt}></img>
        <p className="description">{this.props.description}</p>
        <h3 className="favorite"><span className="heart" onClick={this.favoritedClick} onMouseOver={this.handleHover} onMouseLeave={this.handleLeave} >♥</span>{this.state.favoritesCounter}</h3>
      </Card>
    );
  }
}

export default HornedBeasts;
