import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.hideModal}>
          <Modal.Title closeButton className="modal-title">Hello{this.props.title}<span className="close" onClick={this.hideModal}>✖️</span></Modal.Title>
          <Modal.Body>
            <img title={this.props.title} onClick={this.hideModal} src={this.props.image_url} alt={this.props.alt}></img>
            <p className="description">{this.props.description}</p>
          </Modal.Body>

        </Modal>
      </> 
    );
  }
}

export default SelectedBeast;
