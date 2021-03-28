import React from 'react';
import Card from 'react-bootstrap/Card';
import SelectedBeast from './SelectedBeast';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favoritesCounter: 1,
      showModal: false,
    };
  }

  handleHover = (e) => {
    e.target.style.color = 'red';
    e.target.style.cursor = 'pointer';
  }
  handleLeave = (e) => e.target.style.color = 'royalblue'

  showModal = () => {
    return (
      this.setState({ showModal: true })
    );
  };

  favoritedClick = () => {
    console.log('favoritedClick!');
    this.setState({
      favoritesCounter: this.state.favoritesCounter + 1
    });
  }

  render() {
    return (
      <Card className="beast-cards" >
        <h2 className="beast-name">{this.props.title}</h2>
        <img
          className="gallery"
          onClick={this.showModal}
          title={this.props.title}
          src={this.props.src}
          alt={this.props.alt}>
        </img>
        <SelectedBeast
          show={this.state.showModal}
          title={this.props.title}
          description={this.props.description}
          src={this.props.src}
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
