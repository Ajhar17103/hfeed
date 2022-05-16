import React from "react";
import "./VendorStore.css";

export default function HeroContent(props) {
  const { store_logo, name } = props.HeroContent;
  return (
    <>
      <div className="vendor-image">
        <img className="maxheight" src="/img/logo.png" alt={name} />

        {/* <div className="vendor-profile">
					<img
						className="vendor-profile-img"
						 src={`https://shop.hulusthul.live/images/store/${store_logo}`} alt={name}
					/>
					 
				</div> */}
      </div>
    </>
  );
}
