import './App.css';
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritesCounter: 1,
    };
    console.log(data.map( beast => beast.title));
  }

  buttonClicked = () => {
    console.log('buttonclicked!');
    this.setState({
      favoritesCounter: this.state.favoritesCounter + 1
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Main data={data} />
        <Footer />
      </div>
    );
  }
}
export default App;
