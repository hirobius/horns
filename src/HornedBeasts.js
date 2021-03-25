import React from 'react';
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

  imgClicked = () => {
    console.log('imgClicked!');
    // sadly, we cannot just write:
    // this.state.favoritesCounter++
    // instead, we write:
    this.setState({
      favoritesCounter: this.state.favoritesCounter + 1
    });
  }

  render() {
    return (
      <div className="beast-cards">
        <h2 className="beast-name">{this.props.title}</h2>
        <img onClick={this.imgClicked} title={this.props.title} src={this.props.src} alt={this.props.alt}></img>
        <p className="description">{this.props.description}</p>
        <h3><span className="heart">♥</span>{this.state.favoritesCounter}</h3>
      </div>
    );
  }
}

export default HornedBeasts;
