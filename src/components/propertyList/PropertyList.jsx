import "./propertyList.css";
import img1 from "../../images/apartments.jpg";
import img from "../../images/hotels.jpg";
import img2 from "../../images/resorts.jpg";
import img3 from "../../images/villas.jpg";
import img4 from "../../images/cabins.jpg"




const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src={img}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>214 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src={img1}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>1245 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src={img2}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>1236 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src={img3}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>3753 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src={img4}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>987 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
