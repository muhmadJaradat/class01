import React  from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Card from 'react-bootstrap/Card'

class SelectedBeast extends React.Component  {

    
render() {
   
console.log(this.props.selectedData);

    return (
        <div >
      <Modal   size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={this.props.isOpen} onHide={this.props.closeModal} >
          
  <Modal.Header closeButton >
    <Modal.Title>{this.props.selectedData.nextSibling.textContent}</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <Card.Img src={this.props.selectedData.src}/>
    <Card.Text style={{textAlign:'center'}}>{this.props.selectedData.nextSibling.nextSibling.textContent}</Card.Text>
  </Modal.Body>

  <Modal.Footer>
    <Button onClick={this.props.closeModal}>Close</Button>

  </Modal.Footer>
</Modal>
      </div>
    )
    
}
    
}
export default SelectedBeast;