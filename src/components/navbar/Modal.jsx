import React from 'react'

const Modal = ({open,onClose,children}) => {
  return (
    <div onClick={onClose}
    className={`fixed inset-0 flex justify-center items-center
      transition-colors ${open ? 'visible bg-black/20' :"invisible"}`}
    
    >Modal</div>
  )
}

export default Modal