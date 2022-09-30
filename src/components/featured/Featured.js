import React from 'react';
import "./featured.css";
const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b419a2d4-eba1-4186-b7db-ada0bec4fa2d/nature-wallpaper25.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dubline</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b419a2d4-eba1-4186-b7db-ada0bec4fa2d/nature-wallpaper25.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Aus</h1>
          <h2>523 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b419a2d4-eba1-4186-b7db-ada0bec4fa2d/nature-wallpaper25.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>
    </div>
  );
}

export default Featured