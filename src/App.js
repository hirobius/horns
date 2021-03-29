import './App.css';
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      allBeasts: data,
      beast: {}
    };
  }

  setBeast = (index, favorites) => {
    console.log(favorites);
    this.setState({ beast: this.state.allBeasts[index], showModal: true});
    console.log(this.state.beast);
  };

  hideModal = () => (this.setState({ showModal: false }));

  render() {
    return (
      <div>
        <Header />
        <Main
          allBeasts={this.state.allBeasts}
          setBeast={this.setBeast}
        />
        <SelectedBeast
          showModal={this.state.showModal}
          beast={this.state.beast}
          hideModal={this.hideModal}
          title={this.state.title}
        />
        <Footer />
      </div>
    );
  }
}
export default App;
