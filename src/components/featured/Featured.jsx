import "./featured.css";
import image from "../../images/kasmir.jpg"
import image1 from "../../images/bali.jpg"
import image2 from "../../images/turky.jpg"

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src={image}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>kashmir</h1>
          <h2>210 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
            src={image1}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Bali</h1>
          <h2>433 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
            src={image2}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Turkey</h1>
          <h2>332 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
