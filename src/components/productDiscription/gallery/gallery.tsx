import React, { Component } from 'react';
import { GalleryProps } from '../../../interfaces';
import './gallery.css';

export default class Gallery extends Component<GalleryProps> {
  state = {
    activeImg: this.props.gallery[0],
  };

  render() {
    const { gallery, inStock } = this.props;
    const galleryArr = gallery.map((item, index) => (
      <img
        key={index}
        onClick={(e: any) => {
          this.setState({ activeImg: e.target.src });
        }}
        className={this.state.activeImg === item ? 'activePhoto' : 'photo'}
        src={item}
        alt="NO IMAGE"
      ></img>
    ));
    return (
      <div className="galleryContainer">
        <div className="gallery">{galleryArr}</div>
        <div className="activeImgContainer">
          <img
            className={inStock ? 'activeImg' : 'activeImgOut'}
            alt="NO IMAGE"
            src={this.state.activeImg}
          ></img>
            {!inStock && <p className="inStock">OUT OF STOCK</p>}
        </div>
      </div>
    );
  }
}
