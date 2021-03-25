import './App.css';
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Button from 'react-bootstrap/Button';
import data from './data.json';

class App extends React.Component {
  constructor(props) {
    // this is always the first line of our constructor within a component
    // this is the only time we can set the state with =, and it HAS to be in the constructor, if so
    super(props);
    this.state = {
      favoritesCounter: 1,
    };
    console.log(data.map( beast => beast.title));
  }

  buttonClicked = () => {
    console.log('buttonclicked!');
    // sadly, we cannot just write:
    // this.state.favoritesCounter++
    // instead, we write:
    this.setState({
      favoritesCounter: this.state.favoritesCounter + 1
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
        <h2>Favorites{this.state.favoritesCounter}</h2>
        <button onClick={this.buttonClicked}>Change this button to a Heart img</button>
        <Button>hmmm...</Button>
        <Footer />
      </div>
    );
  }
}
export default App;
