import { Modal, Form } from "react-bootstrap";

const Searchpopup = ({ show, handleClose }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
    >
        <Modal.Header closeButton>
        <Modal.Title >
          Search
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            type="search"
            placeholder="Search products..."
            autoFocus
          />
        </Form>
      </Modal.Body>
    </Modal>


  )
}

export default Searchpopup
