import React from 'react';
import Card from 'react-bootstrap/Card';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favoritesCounter: 0,
    };
  }

  handleHover = (e) => {
    e.target.style.color = 'red';
    e.target.style.cursor = 'pointer';
  }
  handleLeave = (e) => e.target.style.color = 'royalblue'

  favoritedClick = () => (this.setState({ favoritesCounter: this.state.favoritesCounter + 1 }));

  render() {
    return (
      <Card className="beast-cards" >
        <h2 className="beast-name">{this.props.title}</h2>
        <img
          onClick={this.favoritedClick}
          onClick={this.props.setBeast}
          className="gallery"
          // onClick={this.showModal}
          title={this.props.title}
          src={this.props.src}
          alt={this.props.alt}>
        </img>

        <h3 className="favorite">
          <span className="heart"
            onClick={this.favoritedClick}
            onMouseOver={this.handleHover}
            onMouseLeave={this.handleLeave}
          >♥
          </span>
          {this.state.favoritesCounter}
        </h3>
      </Card>
    );
  }
}

export default HornedBeasts;
