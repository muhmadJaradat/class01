import React from 'react';
import './App.css';
import Main from './compentents/main';
import Header from './compentents/header';
import Footer from './compentents/footer';

import SelectedBeast from './compentents/SelectedBeast ';
import Data from './data.json'

class App extends React.Component {
 
  constructor(props){
    super(props);

    this.state = {
      data : Data,
      isOpen : false,
      selectedData: null
    }
  }
    openModal = (e) => {
      this.setState({ isOpen: true ,selectedData:e.target});
      
    }
  closeModal = () => {this.setState({ isOpen: false });}
 
    
  render() {
    
    return (
      <>
    <div>
    
    <Header/>
    <Main Data={this.state.data} openModal={this.openModal} />
    <Footer/>
    {(this.state.isOpen )? <SelectedBeast selectedData={this.state.selectedData} isOpen={this.state.isOpen} closeModal={this.closeModal} />:null} 

    </div>
      
  
     
    </>
    )
  }
}

export default App;