import './App.css';
import React from 'react';
import Form from 'react-bootstrap/Form';

class FormHorn extends React.Component {

  handleChange = (e) => {
    const hornCount = +e.target.value;
    const filteredBeastsRender = this.props.data.filter(beast => beast.horns === hornCount);
    this.props.filteredBeasts(filteredBeastsRender);
  }
  render() {
    return (
      <Form>
        <Form.Group controlId="selectHorns">
          <Form.Label>Filter by Horns</Form.Label>
          <Form.Control as="select" onChange={this.handleChange}>
            <option value="1">1 Horn</option>
            <option value="2">2 Horns</option>
            <option value="3">3 Horns</option>
            <option value="100">100 Horns</option>
          </Form.Control>
        </Form.Group>
      </Form>
    );
  }
}

export default FormHorn;
