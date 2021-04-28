import React from 'react';
import HornedBeast from './HornedBeast';
import Form from 'react-bootstrap/Form'


import CardGroup from 'react-bootstrap/CardGroup'

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state={
            horns:'all'
        }
    }
    changeHorns= (event) => {
        console.log(event.target.value);
        console.log(this.state.horns);
        this.setState({
            horns:event.target.value
        })
        console.log(this.state.horns);
    }
    render() {
      
 return (
     <div>
    <Form style={{width:'100%',margin:'0 auto'}} >
    <Form.Group controlId="exampleForm.SelectCustom"  style={{width:'60%',margin:'0 auto',display:'block'}}>
      <Form.Label style={{margin:'0 auto'}}>Number of horns</Form.Label> <br/>
      <Form.Control name='hornsNumber' as="select" custom onChange={this.changeHorns} >
        <option>all</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>100</option>
      </Form.Control>
    </Form.Group>
  </Form>
 <CardGroup style={{justifyContent:'center'}} >
{
this.props.Data.map(element => {return (this.state.horns==='all') ?
     [<HornedBeast name={element.title} url={element.image_url} description={element.description} openModal={this.props.openModal} horns={element.horns}/>] :  (element.horns===Number(this.state.horns))?[<HornedBeast name={element.title} url={element.image_url} description={element.description} openModal={this.props.openModal} horns={element.horns}/>]:null;
})
}



</CardGroup>
</div>
 )
    }
} 
export default Main;


