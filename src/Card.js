import React from "react";
import "./index.css";
import Sdata from "./Sdata";

const Card = () => {
  return Sdata.map((e) => {
    return (
      <>
        <div className="Cards">
          <div className="Card">
            <img src={e.imgscr} alt="mypic" className="Card_img" />
            <div className="Card_info">
              <span className="Card_category">{e.Mname}</span>
              <h1 className="Card_title">{e.title}</h1>
              <a href={e.links} target="blank">
                <button>Watch</button>
              </a>
              
            </div>
          </div>
        </div>
      </>
    );
  });
};

export default Card;





