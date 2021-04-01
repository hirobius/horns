import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal closeButton show={this.props.showModal} onHide={this.props.hideModal}>
          <Modal.Title data-toggle="modal" className="modal-title">{this.props.beast.title}<span className="close" onClick={this.props.hideModal}>✖️</span></Modal.Title>
          <Modal.Body>
            <img className="modal-image" title={this.props.beast.title} onClick={this.hideModal} src={this.props.beast.image_url} alt={this.props.beast.alt} />
            <p className="description">{this.props.beast.description}</p>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
