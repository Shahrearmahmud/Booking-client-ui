import "./featuredProperties.css";
import img from "../../images/apart.jpg"
import img1 from "../../images/airport.jpg"
import img2 from "../../images/5season.jpg"
import img3 from "../../images/hitlo.jpg"
const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src={img}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Diamond</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>9.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
         src={img1}
          alt=""
          className="fpImg"
        />
        <span className="fpName"> Air Packages</span>
        <span className="fpCity">Austin</span>
        <span className="fpPrice">Starting from $140</span>
        <div className="fpRating">
          <button>9.2</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={img2}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Five Star Hotel</span>
        <span className="fpCity">Lisbon</span>
        <span className="fpPrice">Starting from $99</span>
        <div className="fpRating">
          <button>9.0</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={img3}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hotel Srigal </span>
        <span className="fpCity">Berlin</span>
        <span className="fpPrice">Starting from $105</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
