import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './Modal.css';

// internal box of the modal
function ModalBox(props) {
  return (
    <div style={props.cardStyles} className="modal__wrapper">
      {props.children}
    </div>
  );
}
//actual modal component
const node = document.createElement('div');
node.classList.add('modal');
document.body.appendChild(node);
function Modal({
  animation = true,
  onOpen,
  onClose,
  isOpen = false,
  onShadowClick,
  className,
  ...restProps
}) {
  useEffect(() => {
    animation && node.classList.add('modal__animation');
    className && node.classList.add(className);
    if (isOpen) {
      node.classList.add('modal__open');
      node.onclick = function (e) {
        if (e.target === node && onShadowClick) onShadowClick(e);
      };
      onOpen && onOpen();
    } else {
      node && node.classList.remove('modal__open', className);
      node && onClose && onClose();
    }
    node && ReactDOM.render(<ModalBox {...restProps}></ModalBox>, node);
  }, [isOpen, onShadowClick, restProps, onOpen, onClose, className]);

  return <script />;
}

Modal.propTypes = {
  children: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  onShadowClick: PropTypes.func,
  cardStyles: PropTypes.object,
};

export default Modal;
