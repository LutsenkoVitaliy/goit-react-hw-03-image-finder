import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import Loader from '../Loader';

import { GalleryList } from './ImageGallery.styled';

class ImageGallery extends Component {
  state = { 
    pictures: null,
    error: null,
    status: 'idle',
  }

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pictureName;
    const nextName = this.props.pictureName;

    if (prevName !== nextName) {
      this.setState({ status: 'pending' });

      fetch(`https://pixabay.com/api/?q=${nextName}&page=1&key=24021062-33a986e16cffce2cd7c29eb8f&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
            return Promise.reject(new Error(`Картинки с именем ${nextName} не найдены`));
        })
        .then(pictures => this.setState({ pictures, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }))
    }
  }
  

  render() {
    const { pictures, status, error } = this.state
    console.log(pictures);


    if (status === 'idle') {
      return <div>Введите имя каринки</div>
    };
    
    if(status === 'pending') {
      return <Loader />
    };
    
    if (status === 'rejected') {
      return <h1>{error.message}</h1>
    }

    if (status === 'resolved') { 
      return (
      <GalleryList>
          <ImageGalleryItem pictures={pictures.hits} /> 
      </GalleryList>     
      )
    }
  }}

export default ImageGallery;
