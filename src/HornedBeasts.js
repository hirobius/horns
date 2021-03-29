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

  handleClick = () => {
    this.favoritedClick();
    this.props.setBeast(this.props.index, this.state.favoritesCounter);
  }

  favoritedClick = () => (this.setState({ favoritesCounter: this.state.favoritesCounter + 1 }));

  render() {
    return (
      <Card className="beast-cards" >
        <h2 className="beast-name">{this.props.title}</h2>
        <img
          className="gallery"
          onClick={() => this.handleClick()}
          name={this.props.keyword}
          title={this.props.title}
          src={this.props.image_url}
          description={this.props.description}
          key={this.props.title}
          alt={this.props.title}
        />

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
