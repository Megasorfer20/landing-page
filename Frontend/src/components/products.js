import shampuoMechudosFoto from "../images/SHAMPOOMECHUDOS.jpg";
import tonicoMechudosFoto1 from "../images/tonico2.png";
import tonicoMechudosFoto2 from "../images/TONICOCAPILARMECHUDOS.jpg";
import tonicoMechudosFoto3 from "../images/tonico3.png";
import tonicoMechudosFoto4 from "../images/tonico.png";
import tonicoMechudosFoto5 from "../images/tonico4.png";
import tonicoMechudosFoto6 from "../images/tonicoMechudos.jpeg";
import { useState } from "react";

function Products() {
  const [bigImage, setBigImage] = useState(tonicoMechudosFoto1);

  const chamgePhotoHandler = (image) => {
    setBigImage(image);
  };

  return (
    <div className="Products">
      <div className="big-product">
        <img src={bigImage} alt="Tonico" />
      </div>
      <div className="allMedia">
        <button
          className="img-container"
          onClick={() => {
            chamgePhotoHandler(tonicoMechudosFoto1);
          }}
        >
          <img src={tonicoMechudosFoto1} alt="Tónico Mechudos" />
        </button>
        <button
          className="img-container"
          onClick={() => {
            chamgePhotoHandler(tonicoMechudosFoto2);
          }}
        >
          <img src={tonicoMechudosFoto2} alt="Tónico Mechudos" />
        </button>
        <button
          className="img-container"
          onClick={() => {
            chamgePhotoHandler(tonicoMechudosFoto3);
          }}
        >
          <img src={tonicoMechudosFoto3} alt="Tónico Mechudos" />
        </button>
        <button
          className="img-container"
          onClick={() => {
            chamgePhotoHandler(tonicoMechudosFoto4);
          }}
        >
          <img src={tonicoMechudosFoto4} alt="Tónico Mechudos" />
        </button>
        <button
          className="img-container"
          onClick={() => {
            chamgePhotoHandler(tonicoMechudosFoto5);
          }}
        >
          <img src={tonicoMechudosFoto5} alt="Tónico Mechudos" />
        </button>
        <button
          className="img-container"
          onClick={() => {
            chamgePhotoHandler(tonicoMechudosFoto6);
          }}
        >
          <img src={tonicoMechudosFoto6} alt="Tónico Mechudos" />
        </button>
      </div>
    </div>
  );
}

export default Products;
