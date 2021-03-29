import './App.css';
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import SelectedBeast from './SelectedBeast';

// so the showmodal, slectedbeast component etc should all be handled on app.js then passed to the components that require it. so pass the function that sets the current beast and the show to true from app.js --> main.js --> hornedbeast. then also pass the boolean that lives on app.js to selectedbeast component as well as a function that sets it to false. this will fix the issues of modal opening but then not being able to shut down.

// So the place to handle state as well as the functions should be handled at the highest level required. for example horned beast and selectedbeast require the same function as well as the boolean on the state. they are both rendered at app.js so this should be app.js. when you pass a function as props its the same as passing any kind of other data, just remember not to pass the invokation of that function. so a function called handleClick if this updates the state of app.js but clickong on an image in a child component should trigger this then you just need to pass it as a prop. passing up to a parent is not possible, this is why we handle props at the highest level. Great start to the lab, some rearranging of where things live and you will be set. Keep up the good work.

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      favoritesCounter: 0,
      allBeasts: data,
      beast: this.allBeasts
    };
  }
 
  setBeast = () => (this.setState({ beast: this.beast, showModal: true }));
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
