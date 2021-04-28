import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap'


class HornedBeast extends React.Component {
    constructor(props){
        super(props);
        this.state= {
        numOfClicks:0
        }
    }
    handler= (e) =>{
        this.props.openModal(e);
        this.setState({
            numOfClicks:this.state.numOfClicks+1,
        })
    }
    render() {
        console.log(this.props);
        return(
        <div>
            
            <Card style={{ width: '18rem' , height:'400px' ,     margin: '20px'}} bg={'dark' } className="mb-2"
                text={'white'}
                >
  
 
  <Card.Img variant="top" src={this.props.url} alt='' onClick={this.handler} style={{height:'200px'}}  />
    <Card.Title>{this.props.name}</Card.Title>
    <Card.Text>
    {this.props.description}
    </Card.Text>
    <Card.Text>
    💖 {this.state.numOfClicks}
    </Card.Text>
  

</Card>

 
 </div>
        )
    }
} 
export default HornedBeast;