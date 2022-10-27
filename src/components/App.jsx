import { Component } from "react";
import { Container } from "./App.styled";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ImageGallery from "./ImageGallery";
import Searchbar from "./Searchbar";

class App extends Component {
  state = { 
    pictureName: '',
  }

  handleSearchSubmit = pictureName => {
    this.setState({pictureName})
  }
  



  render() {
    const {pictureName} = this.state
    return (
    <Container>
      <Searchbar onSearchSubmit={this.handleSearchSubmit}/>
      <ImageGallery pictureName={pictureName}/>
      
      <ToastContainer autoClose={3000} />
    </Container>
    );
  }
}

export default App;
