import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';

class HornedBeast extends React.Component {
    constructor(props){
        super(props);
        this.state= {
        numOfClicks:0
        }
    }
    handler= () =>{
        this.setState({
            numOfClicks:this.state.numOfClicks+1,
        })
    }
    render() {
        return(
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.url} alt='' onClick={this.handler} />
  <Card.Body>
    <Card.Title>{this.props.name}</Card.Title>
    <Card.Text>
    {this.props.description}
    </Card.Text>
    <Card.Text>
    💖 {this.state.numOfClicks}
    </Card.Text>
  
  </Card.Body>
</Card>

 
 </div>
        )
    }
} 
export default HornedBeast;