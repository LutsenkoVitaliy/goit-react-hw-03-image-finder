import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import Loader from '../Loader';

class ImageGallery extends Component {
  state = { 
    picture: null,
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
        .then(picture => this.setState({ picture, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }))
    }
  }
  

  render() {
    const { picture, status, error } = this.state
    console.log(picture);


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
      <div>
        <p>{picture.hits[0].tags}</p>
        <img src={picture.hits[0].previewURL} alt={this.state.picture.hits[0].tags} />
      </div>
    )}

        {/* <ImageGalleryItem/> */}
  }
}

export default ImageGallery;
