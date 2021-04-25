import Main from './compentents/main';
import Header from './compentents/header';
import Footer from './compentents/footer';
import React from 'react';
class App extends React.Component {
  render() {
    return (
    <div>
    <Header/>
    <Main/>
    <Footer/>
    </div>
    )
  }
}

export default App;