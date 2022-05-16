import "./Slide.css";

export default function Slide(props) {
  return (
    <>
      <div className="product-item">
        <div className="banner-item">
          <img
            className=""
            alt="image"
            src={`https://shop.hoolo.live/images/slider/${props.img}`}
          />
          <h6 style={{ fontWeight: "700" }}></h6>
        </div>
      </div>
    </>
  );
}
