import './App.css';
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import SelectedBeast from './SelectedBeast';
import FormHorn from './FormHorn';
import Container from 'react-bootstrap/Container';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      allBeasts: data,
      beast: {},
      username: 'user',
      hornCount: 0
    };
  }

  filteredBeasts = (beasts) => {
    this.setState({ allBeasts: beasts });
  }

  setBeast = (index, favorites) => {
    console.log(favorites);
    this.setState({ beast: this.state.allBeasts[index], showModal: true });
    console.log(this.state.beast);
  };

  hideModal = () => (this.setState({ showModal: false }));

  render() {
    return (
      <div>
        <Container>
          <FormHorn
            data={data}
            allBeasts={this.state.allBeasts}
            beast={this.state.beast}
            filteredBeasts={this.filteredBeasts}
          />
        </Container>
        <Header />
        <Main
          allBeasts={this.state.allBeasts}
          beast={this.state.beast}
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
