import React  from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Card from 'react-bootstrap/Card'

class SelectedBeast extends React.Component  {

    
render() {
   


    return (
        <div style={{position:'relative'}}>
      <Modal.Dialog style={ {position:'absolute',top:'0',bottom:'0',left:'0',right:'0',margin:'auto'} }  >
          
  <Modal.Header closeButton >
    <Modal.Title>{this.props.selectedData.nextSibling.textContent}</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <Card.Img src={this.props.selectedData.src}/>
    <Card.Text>{this.props.selectedData.nextSibling.nextSibling.textContent}</Card.Text>
  </Modal.Body>

  <Modal.Footer>
    <Button onClick={this.props.closeModal}>Close</Button>

  </Modal.Footer>
</Modal.Dialog>
      </div>
    )
    
}
    
}
export default SelectedBeast;