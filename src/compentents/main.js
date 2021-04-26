import React from 'react';
import HornedBeast from './HornedBeast';
import Data from '../data.json'

class Main extends React.Component {
    render() {
 return (
 <div> 
{
Data.map(element => {
    return [<HornedBeast name={element.title} url={element.image_url} description={element.description}/>];
})
}



 </div>
 )
    }
} 
export default Main;


