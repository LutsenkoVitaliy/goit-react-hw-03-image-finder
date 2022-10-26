import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';

class ImageGallery extends Component {
  state = { 

   }
  render() {
    return (
    <ul class="gallery">
      <ImageGalleryItem/>
    </ul>
    );
  }
}

export default ImageGallery;