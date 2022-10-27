import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';

class ImageGallery extends Component {
  state = { 

  }
  

  render() {
    return (
      <div>
        <h1>Picture</h1>
        <p>{this.props.pictureName}</p>
      {/* <ImageGalleryItem/> */}
    </div>
    );
  }
}

export default ImageGallery;

  // componentDidMount() {
  //   this.setState({loading: true})
  //   fetch('https://pixabay.com/api/?q=cat&page=1&key=24021062-33a986e16cffce2cd7c29eb8f&image_type=photo&orientation=horizontal&per_page=12')
  //     .then(res => res.json())
  //     .then(pictures => this.setState({pictures}))
  //     .finally(() => this.setState({ loading: false}))
  // }