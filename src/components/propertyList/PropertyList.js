import React from 'react'
import "./propertyList.css";
const PropertyList = () => {
    return (
      <div className="pList">
        <div className="pListItem">
          <img
            src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Hotels</h1>
            <h2>233 hotels</h2>
          </div>
        </div>
        <div className="pListItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/380569812.jpg?k=0755f95e7361587eb7b9c9b79ea62d51b8dcef7cba1e3987daecd59e26daa42b&o=&hp=1"
            className="pListImg"
            alt=""
          />
          <div className="pListTitles">
            <h1>Resort</h1>
            <h2>243 hotels</h2>
          </div>
        </div>
        <div className="pListItem">
          <img
            src="https://www.lux-review.com/wp-content/uploads/2019/09/turkish-hotel.jpg
"
            className="pListImg"
            alt=""
          />
          <div className="pListTitles">
            <h1>Apartment</h1>
            <h2>2331 hotels</h2>
          </div>
        </div>
        <div className="pListItem">
          <img
            src="https://assets.cntraveller.in/photos/61160b855ee2ad4060e8ca19/master/pass/Summertime_goa_indiasbestvilla_lead.jpg"
            className="pListImg"
            alt=""
          />
          <div className="pListTitles">
            <h1>Villas</h1>
            <h2>4444 hotels</h2>
          </div>
        </div>
        <div className="pListItem">
          <img
            src="https://cdn.decoist.com/wp-content/uploads/2019/12/Dark-roofs-of-the-cabin-stand-in-contrast-to-the-light-woodsy-tone-of-the-cabin-itself.jpg"
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>Cabins</h1>
            <h2>23553 hotels</h2>
          </div>
        </div>
      </div>
    );
}

export default PropertyList

