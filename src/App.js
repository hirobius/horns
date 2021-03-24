import './App.css';
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Button from 'react-bootstrap/Button';

class App extends React.Component {
  constructor(props) {
    // this is always the first line of our constructor within a component
    super(props);
    this.state = {
      numberOfExclamationPoints: 1,
    };
  }

  buttonClicked = () => {
    console.log('buttonclicked!');
    // sadly, we cannot just write:
    // this.state.numberOfExclamationPoints++
    // instead, we write:
    this.setState({
      numberOfExclamationPoints: this.state.numberOfExclamationPoints + 1
    });
  }

  render() {
    // let exclamationPoints = () => numberOfExclamationPoints + 1;
    return (
      <div>
        <Header />
        <Main />
        <h2>Set up {this.state.numberOfExclamationPoints}</h2>
        <button onClick={this.buttonClicked}>Test!</button>
        <Button>hmmm...</Button>
        <Footer />
      </div>
    );
  }
}
export default App;
