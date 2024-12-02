import React from 'react'
import { ModalTitle } from 'react-bootstrap'
import { Button, Input, Modal, ModalBody, ModalFooter } from 'reactstrap'

const MessageModal = ({ showModal, title, handleConfirm, handleCancel, confirmationText, message, setMessage }) => {

  return (
    <Modal isOpen={showModal} centered>
      <ModalBody>
        <ModalTitle className="mt-3 font-size-22">
          {title}
        </ModalTitle>
        <div className='py-3'>
          <Input
            placeholder='Enter Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </ModalBody>
      <ModalFooter className="d-flex justify-content-end">
        <Button className='btn btn-lg btn-rumi-blue'
          onClick={() => handleConfirm()}
          disabled={message.length == 0}
        >
          Send
        </Button>
        <Button className='btn btn-lg btn-danger'
          onClick={() => handleCancel()}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default MessageModal