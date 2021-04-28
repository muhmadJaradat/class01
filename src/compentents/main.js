import React from 'react';
import HornedBeast from './HornedBeast';



import CardGroup from 'react-bootstrap/CardGroup'

class Main extends React.Component {
    
    render() {
      
 return (
 <CardGroup >
{
this.props.Data.map(element => {
    return [<HornedBeast name={element.title} url={element.image_url} description={element.description} openModal={this.props.openModal} />];
})
}



</CardGroup>
 )
    }
} 
export default Main;


