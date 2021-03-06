import { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import './Modal.css'
const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  };

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose()
    }
  };
  
  handleClickBackDrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose()
    }
  };
  
  render() { 
    return createPortal (
  <div className ="overlay" onClick={this.handleClickBackDrop}>
    <div className="modal">{this.props.children}</div>
  </div>, modalRoot 
    );
  }
}
 
export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
}