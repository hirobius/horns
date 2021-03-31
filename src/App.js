import './App.css';
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import SelectedBeast from './SelectedBeast';
import Form from 'react-bootstrap/Form';
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

  setBeast = (index, favorites) => {
    console.log(favorites);
    this.setState({ beast: this.state.allBeasts[index], showModal: true });
    console.log(this.state.beast);
  };

  hideModal = () => (this.setState({ showModal: false }));

  // Original form part 1
  // handleFormSubmitted = (e) => {
  //   e.preventDefault;
  //   console.log("Hello there!!!");
  // }

  // Original form part 2
  // handleUsernameTyped = (e) => {
  //   if (e.target.value.length > 0) {
  //     this.setState({
  //       username: e.target.value
  //     });
  //   } else {
  //     this.setState({
  //       username: 'user'
  //     });
  //   }
  // }

  handleChange = (e) => {
    this.setState({hornCount: e.target.value });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        {/* React Form Part 1 */}
        <Container>
          <Form>
            <Form.Group controlId="selectHorns">
              <Form.Label>Filter by Horns</Form.Label>
              {/* React Form Part 2 */}
              {/* <Form.Control type="text" onInput={this.handleUsernameTyped} /> */}
              <Form.Control as="select" name={'hello'} value={this.state.hornCount} onChange={this.handleChange}>
                <option value="1">{this.state.allBeasts[19].horns}</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="100">100</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Container>
        {/* Original form part 3 */}
        <Header username={this.state.username} />
        {/* Original form part 4 */}
        {/* <form onSubmit={this.handleFormSubmitted}>
          <label htmlFor="name">username</label>
          <input id="name" name="name" type="text" onInput={this.handleUsernameTyped} />
          <br />
          <label htmlFor="dob"> Date of Birth</label>
          <input type=""></input>
          <input type="submit" />
        </form> */}
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
