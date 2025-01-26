import React from "react";
import Navbar from "../Navbar";
import "./Home.css";
import Carousel from "../Carousel";
import Carosuels from "../Carousels";
import Footer from "../Footer";
import ChatbotAi from "../ChatbotAi";
const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <section className="firstSection">
        <div className="imageContainer">
          <img
            className="images"
            src="https://cms.code4rest.com/wp121/wp-content/uploads/2024/10/about-01.jpg"
            alt=""
          />
        </div>
        <div className="firstSectionTextContainer">
          <div className="iconsTitle">
            <svg
              style={{ marginRight: "10px" }}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_5_12)">
                <path
                  d="M4.2434 18.4107L4.25379 18.4C4.26681 18.4127 4.28121 18.4255 4.29699 18.4385C4.85646 18.7207 5.45259 18.9236 6.06812 19.0411L6.06785 19.0425C6.78894 19.1457 7.62203 19.1365 8.39226 18.8883C9.70996 18.4636 10.5168 17.4607 10.7903 15.9076C11.3461 12.7514 8.44375 11.0643 7.85629 10.7582C7.82233 10.7405 7.79365 10.7141 7.77314 10.6818C7.75262 10.6494 7.74101 10.6123 7.73947 10.574C7.73793 10.5357 7.74651 10.4977 7.76436 10.4639C7.7822 10.43 7.80867 10.4014 7.84109 10.381C9.79582 9.14543 10.3977 7.68161 9.63015 6.03012C9.21398 5.13469 8.58629 4.56137 7.76457 4.32637C5.75648 3.75172 3.17656 5.28825 2.55621 5.68614L3.72516 7.70895C4.36844 7.26551 6.96344 5.63082 8.45098 6.9843C8.59122 7.11022 8.70411 7.26361 8.78263 7.43495C8.86116 7.6063 8.90364 7.79195 8.90746 7.98039C8.91203 8.16445 8.87875 8.34749 8.80968 8.51816C8.74061 8.68883 8.63723 8.8435 8.50594 8.97258C7.66551 9.8068 6.24094 9.71184 5.12414 9.45512L5.88461 12.1535C6.33242 12.0324 7.59652 11.7757 8.46344 12.434C9.05051 12.8798 9.33293 13.6476 9.30285 14.716C9.2859 15.3182 9.07016 15.8132 8.66164 16.1869C7.72141 17.0472 6.09699 16.9591 6.02828 16.955C4.08652 16.8235 2.60301 15.8946 1.61812 14.1941C1.25636 13.5578 0.980139 12.8765 0.7966 12.168C0.855194 13.0003 1.01402 14.0305 1.39453 15.0408C1.98 16.5956 2.93465 17.7232 4.2434 18.4107Z"
                  fill="#FF6600"
                ></path>
                <path
                  d="M18.6735 9.43889C18.2353 8.30917 17.559 7.48745 16.6635 6.99663C15.8128 6.53034 15.0147 6.41675 14.2915 6.65882C13.2449 7.00921 12.3316 8.07733 11.4995 9.92444C10.9989 11.0357 10.3393 11.4017 9.87395 11.513C9.75459 11.5415 9.63254 11.5574 9.50985 11.5603C9.66155 11.7022 9.80625 11.8514 9.94344 12.0074C11.2198 12.0101 12.1708 11.7901 12.8477 11.3355C13.4451 10.9343 13.7324 10.4024 13.9423 10.0142L13.9744 9.9546C14.2236 9.49276 14.4813 9.01522 14.872 8.64069C15.3449 8.18757 15.9641 7.98401 16.488 8.10979C16.9993 8.23253 17.433 8.63846 17.7771 9.31635C18.3131 10.3723 18.4476 11.5664 18.1459 12.5924C17.8145 13.7199 16.9216 14.6452 15.8713 14.9497C14.3381 15.3941 13.0093 14.4687 12.3238 13.3126C12.3229 13.3419 12.3223 13.3745 12.322 13.4107C12.3188 13.9592 12.3398 14.6755 12.5335 15.3566C12.8038 16.3067 13.5047 17.0597 14.4085 17.3715C15.2852 17.6737 16.2311 17.5242 17.0038 16.9613C17.9352 16.2827 18.6669 15.0737 19.0113 13.6445C19.1643 13.0098 19.225 12.4633 19.197 11.974C19.1602 11.3388 19.04 10.3836 18.6735 9.43889ZM11.2336 5.4285C12.6965 6.12678 14.7345 5.6746 17.2909 4.08475C17.3068 4.075 17.3205 4.06192 17.3309 4.04642C17.3413 4.03091 17.3483 4.01335 17.3513 3.99491C17.3545 3.97683 17.3538 3.95828 17.3492 3.94052C17.3446 3.92275 17.3362 3.90619 17.3246 3.89194L16.2013 2.4935C16.18 2.46705 16.1493 2.44989 16.1156 2.44564C16.0819 2.44138 16.0479 2.45036 16.0207 2.47069C14.4106 3.70393 12.9216 4.18432 11.5953 3.89858C10.3094 3.62151 9.47094 2.68034 9.02106 2.00897C9.11731 2.50863 9.26795 2.99626 9.47028 3.46315C9.88848 4.40854 10.4817 5.0696 11.2336 5.4285Z"
                  fill="#FF6600"
                ></path>
                <path
                  d="M13.3399 1.81414L12.2805 0.895508L11.2453 1.9177L12.3125 2.87125L13.3399 1.81414Z"
                  fill="#FF6600"
                ></path>
              </g>
            </svg>
            <p style={{ margin: "0px " }}>EDUCATION FOR ALL RURAL CHILDREN</p>
          </div>
          <div>
            <h1 className="firstSectionTitle">
              Dharma protects those who uphold it
            </h1>
          </div>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <button className="firstSectionButton">READ MORE</button>
        </div>
      </section>
      <section className="firstSection">
        <div className="firstSectionTextContainer">
          <div className="iconsTitle">
            <svg
              style={{ marginRight: "10px" }}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_5_12)">
                <path
                  d="M4.2434 18.4107L4.25379 18.4C4.26681 18.4127 4.28121 18.4255 4.29699 18.4385C4.85646 18.7207 5.45259 18.9236 6.06812 19.0411L6.06785 19.0425C6.78894 19.1457 7.62203 19.1365 8.39226 18.8883C9.70996 18.4636 10.5168 17.4607 10.7903 15.9076C11.3461 12.7514 8.44375 11.0643 7.85629 10.7582C7.82233 10.7405 7.79365 10.7141 7.77314 10.6818C7.75262 10.6494 7.74101 10.6123 7.73947 10.574C7.73793 10.5357 7.74651 10.4977 7.76436 10.4639C7.7822 10.43 7.80867 10.4014 7.84109 10.381C9.79582 9.14543 10.3977 7.68161 9.63015 6.03012C9.21398 5.13469 8.58629 4.56137 7.76457 4.32637C5.75648 3.75172 3.17656 5.28825 2.55621 5.68614L3.72516 7.70895C4.36844 7.26551 6.96344 5.63082 8.45098 6.9843C8.59122 7.11022 8.70411 7.26361 8.78263 7.43495C8.86116 7.6063 8.90364 7.79195 8.90746 7.98039C8.91203 8.16445 8.87875 8.34749 8.80968 8.51816C8.74061 8.68883 8.63723 8.8435 8.50594 8.97258C7.66551 9.8068 6.24094 9.71184 5.12414 9.45512L5.88461 12.1535C6.33242 12.0324 7.59652 11.7757 8.46344 12.434C9.05051 12.8798 9.33293 13.6476 9.30285 14.716C9.2859 15.3182 9.07016 15.8132 8.66164 16.1869C7.72141 17.0472 6.09699 16.9591 6.02828 16.955C4.08652 16.8235 2.60301 15.8946 1.61812 14.1941C1.25636 13.5578 0.980139 12.8765 0.7966 12.168C0.855194 13.0003 1.01402 14.0305 1.39453 15.0408C1.98 16.5956 2.93465 17.7232 4.2434 18.4107Z"
                  fill="#FF6600"
                ></path>
                <path
                  d="M18.6735 9.43889C18.2353 8.30917 17.559 7.48745 16.6635 6.99663C15.8128 6.53034 15.0147 6.41675 14.2915 6.65882C13.2449 7.00921 12.3316 8.07733 11.4995 9.92444C10.9989 11.0357 10.3393 11.4017 9.87395 11.513C9.75459 11.5415 9.63254 11.5574 9.50985 11.5603C9.66155 11.7022 9.80625 11.8514 9.94344 12.0074C11.2198 12.0101 12.1708 11.7901 12.8477 11.3355C13.4451 10.9343 13.7324 10.4024 13.9423 10.0142L13.9744 9.9546C14.2236 9.49276 14.4813 9.01522 14.872 8.64069C15.3449 8.18757 15.9641 7.98401 16.488 8.10979C16.9993 8.23253 17.433 8.63846 17.7771 9.31635C18.3131 10.3723 18.4476 11.5664 18.1459 12.5924C17.8145 13.7199 16.9216 14.6452 15.8713 14.9497C14.3381 15.3941 13.0093 14.4687 12.3238 13.3126C12.3229 13.3419 12.3223 13.3745 12.322 13.4107C12.3188 13.9592 12.3398 14.6755 12.5335 15.3566C12.8038 16.3067 13.5047 17.0597 14.4085 17.3715C15.2852 17.6737 16.2311 17.5242 17.0038 16.9613C17.9352 16.2827 18.6669 15.0737 19.0113 13.6445C19.1643 13.0098 19.225 12.4633 19.197 11.974C19.1602 11.3388 19.04 10.3836 18.6735 9.43889ZM11.2336 5.4285C12.6965 6.12678 14.7345 5.6746 17.2909 4.08475C17.3068 4.075 17.3205 4.06192 17.3309 4.04642C17.3413 4.03091 17.3483 4.01335 17.3513 3.99491C17.3545 3.97683 17.3538 3.95828 17.3492 3.94052C17.3446 3.92275 17.3362 3.90619 17.3246 3.89194L16.2013 2.4935C16.18 2.46705 16.1493 2.44989 16.1156 2.44564C16.0819 2.44138 16.0479 2.45036 16.0207 2.47069C14.4106 3.70393 12.9216 4.18432 11.5953 3.89858C10.3094 3.62151 9.47094 2.68034 9.02106 2.00897C9.11731 2.50863 9.26795 2.99626 9.47028 3.46315C9.88848 4.40854 10.4817 5.0696 11.2336 5.4285Z"
                  fill="#FF6600"
                ></path>
                <path
                  d="M13.3399 1.81414L12.2805 0.895508L11.2453 1.9177L12.3125 2.87125L13.3399 1.81414Z"
                  fill="#FF6600"
                ></path>
              </g>
            </svg>
            <p style={{ margin: "0px " }}>EDUCATION FOR ALL RURAL CHILDREN</p>
          </div>
          <div>
            <h1 className="firstSectionTitle">
              Dharma protects those who uphold it
            </h1>
          </div>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <button className="firstSectionButton">READ MORE</button>
        </div>
        <div className="imageContainer">
          <img
            className="images"
            src="https://cms.code4rest.com/wp121/wp-content/uploads/2024/10/about-01.jpg"
            alt=""
          />
        </div>
      </section>
      <section className="ThirdSection">
        <div>
          <h6>OUR SERVICES</h6>
          <div className="thirdSectionTitleContainer">
            <h2 className="thirdSectionTitle">SPIRITUAL SERVICES</h2>
          </div>
        </div>
        <div className="thirdSectionContainer">
          <div className="thirdSectionTextContainer">
            <div className="thirdSectionText">
              <h1>POOOJA</h1>
              <p>
                It is a long established fact that a reader will a distracted by
                the readable content.
              </p>
            </div>
            <div className="thirdSectionText">
              <h1>MARRIAGE</h1>
              <p>
                It is a long established fact that a reader will a distracted by
                the readable content.
              </p>
            </div>
            <div className="thirdSectionText">
              <h1>BHOOMI POOJA</h1>
              <p>
                It is a long established fact that a reader will a distracted by
                the readable content.
              </p>
            </div>
          </div>
          <div className="thirdSectionImageContainer">
            <img
              className="thirdSectionImage"
              src="https://cms.code4rest.com/wp121/wp-content/uploads/2024/10/service.png"
              alt="imgs"
            />
          </div>
          <div className="thirdSectionTextContainer">
            <div className="thirdSectionTextRight">
              <h1>DARSHON</h1>
              <p>
                It is a long established fact that a reader will a distracted by
                the readable content.
              </p>
            </div>
            <div className="thirdSectionTextRight">
              <h1>PRASHAD</h1>
              <p>
                It is a long established fact that a reader will a distracted by
                the readable content.
              </p>
            </div>
            <div className="thirdSectionTextRight">
              <h1>CAR POOJA</h1>
              <p>
                It is a long established fact that a reader will a distracted by
                the readable content.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="parallax">
        <div className="secondSection">
          <div className="secondSectionText">
            <h2 className="secondSectionTitle">
              FOLLOW YOUR <br />
              DHARMA
            </h2>
            <a className="secondSectionButton" href="#">
              READ MORE
            </a>
          </div>
        </div>
      </section>

      <Carosuels />
      <Footer />
      <ChatbotAi />
    </>
  );
};

export default Home;
