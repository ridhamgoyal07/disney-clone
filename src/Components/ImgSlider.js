import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      {/* <Wrap href="https://www.google.com" target="_blank">
                <img src="./images/slider-badging.jpg" alt="qtyey" />
            </Wrap> */}
      <Wrap>
        <img src="./images/slider-badging.jpg" alt="qtyey" />
      </Wrap>
      <Wrap>
        <img src="./images/slider-scale.jpg" alt="qtyey" />
      </Wrap>
      <Wrap>
        <img src="./images/slider-scales.jpg" alt="qtyey" />
      </Wrap>
      <Wrap>
        <img src="./images/slider-badag.jpg" alt="qtyey" />
      </Wrap>
    </Carousel>
  );
};

export default ImgSlider;

//inherit the style of Slider component and add new Design
const Carousel = styled(Slider)`
  width: 100%;
  margin-top: 15px;
  
  ul li button{
      &:before{
        font-size:10px;
        color: rgb(150,158,171); 
      }
  }

  button{
      z-index:1;
  }

  li.slick-active button::before{
      color:white; 
  }

  .slick-list{
      overflow:visible;
  }

`;
const Wrap = styled.div`
  cursor: pointer;
  img {
    border:3px solid transparent; 
    width: 100%;
    height: 100%;
    border-radius:4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px , rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition:300ms;
    &:hover{
        border-color:rgba(249,249,249,0.6);
    }
  }
  
`;
