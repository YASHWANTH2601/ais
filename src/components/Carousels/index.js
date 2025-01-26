import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousels.css";
const books = [
  {
    image: "https://m.media-amazon.com/images/I/61rkvzGuihL._SL240_.jpg",
  },
  {
    image: "https://m.media-amazon.com/images/I/61rkvzGuihL._SL240_.jpg",
  },
  {
    image: "https://m.media-amazon.com/images/I/61rkvzGuihL._SL240_.jpg",
  },
  {
    image: "https://m.media-amazon.com/images/I/61rkvzGuihL._SL240_.jpg",
  },
  {
    image: "https://m.media-amazon.com/images/I/61rkvzGuihL._SL240_.jpg",
  },
  {
    image: "https://m.media-amazon.com/images/I/61rkvzGuihL._SL240_.jpg",
  },
  {
    image: "https://m.media-amazon.com/images/I/61rkvzGuihL._SL240_.jpg",
  },
  {
    image: "https://m.media-amazon.com/images/I/61rkvzGuihL._SL240_.jpg",
  },
  {
    image: "https://m.media-amazon.com/images/I/61rkvzGuihL._SL240_.jpg",
  },
  {
    image: "https://m.media-amazon.com/images/I/61rkvzGuihL._SL240_.jpg",
  },
  {
    image: "https://m.media-amazon.com/images/I/61rkvzGuihL._SL240_.jpg",
  },
  {
    image: "https://m.media-amazon.com/images/I/61rkvzGuihL._SL240_.jpg",
  },
  {
    image: "https://m.media-amazon.com/images/I/61rkvzGuihL._SL240_.jpg",
  },
  {
    image: "https://m.media-amazon.com/images/I/61rkvzGuihL._SL240_.jpg",
  },
];
function Carousels() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "lightgrey",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "25px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "lightgrey",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 100,
          marginLeft: "25px",
        }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {books.map((book, index) => (
          <div key={index}>
            <div className="sliders">
              <img
                src={book.image}
                alt={book.title}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  // padding: "0px 10px",

                  marginRight: "auto",
                  marginLeft: "auto",
                }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousels;
