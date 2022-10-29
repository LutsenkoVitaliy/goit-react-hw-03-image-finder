import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import Loader from '../Loader';

class ImageGallery extends Component {
  state = { 
    picture: null,
    error: null,
    loading: false,
  }

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pictureName;
    const nextName = this.props.pictureName;

    
    
    if (prevName !== nextName) {
      this.setState({ loading: true, picture: null });

      fetch(`https://pixabay.com/api/?q=${nextName}&page=1&key=24021062-33a986e16cffce2cd7c29eb8f&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`Картинки с именем ${nextName} не найдены`))
        })
        .then(picture => this.setState({ picture }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }
  

  render() {
    const { picture, error, loading } = this.state
    const {pictureName} = this.props
    console.log(picture);

    return (
      <div>
        {error && <h1>{error.message}</h1>}
        {loading && <Loader />}
        {!pictureName && <div>Введите имя каринки</div>}
        {picture &&
          <div>
            <p>{picture.hits[0].tags}</p>
            <img src={picture.hits[0].previewURL} alt={this.state.picture.hits[0].tags} />
          </div>}
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