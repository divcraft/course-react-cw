import React from 'react';
import ReactDOM from 'react-dom';
import PortalSection from './PortalSection';

const Modal = () => {
   return ReactDOM.createPortal(
      <PortalSection />,
      document.getElementById('modal')
   )
}

export default Modal;