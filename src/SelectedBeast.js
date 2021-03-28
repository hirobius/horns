import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} ohHide={this.hideModal}>
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Modal title</Modal.Title>
              <p>X</p>
            </Modal.Header>

            <Modal.Body>
              <img title={this.props.title} src={this.props.src} alt={this.props.alt}></img>
              <p className="description">{this.props.description}</p>
            </Modal.Body>

            <Modal.Footer>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
