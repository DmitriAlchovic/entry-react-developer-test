import  { Component } from "react";
import { SliderProps, SliderState } from "../../../../interfaces";
import "./slider.css";
import vectorLeft from "../../../../assets/Vector-left.svg"; 
import vectorRight from "../../../../assets/Vector-right.svg";

export default class Slider extends Component<SliderProps, SliderState> {
  state = {
    galleryIndex: 0,
  };

  leftArrowClick = () => {
    if (this.state.galleryIndex === 0) {
      this.setState({ galleryIndex: this.props.gallery.length - 1 });
    } else {
      this.setState({ galleryIndex: this.state.galleryIndex - 1 });
    }
  };

  rightArrowClick = () => {
    if (this.state.galleryIndex === this.props.gallery.length - 1) {
      this.setState({ galleryIndex: 0 });
    } else {
      this.setState({ galleryIndex: this.state.galleryIndex + 1 });
    }
  };

  render() {
    const { gallery } = this.props;
    const galleryArr = gallery.map((item, index) => {
      return <img key={index} className="sliderImg" src={item}></img>;
    });
    return (
      <div className="sliderContainer">
        <div className="sliderItem">
          <div className="arrows">
            <button className="arrow" onClick={this.leftArrowClick}>
              <img src={vectorLeft} />
            </button>
            <button className="arrow" onClick={this.rightArrowClick}>
              <img src={vectorRight} />
            </button>
          </div>
        </div>
        <div className="imgC">{galleryArr[this.state.galleryIndex]}</div>
      </div>
    );
  }
}
