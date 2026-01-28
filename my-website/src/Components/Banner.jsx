import bannerImg from "../assets/banner.jpg";

function Banner() {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="banner-text">
        <h4>TRENDING THREADS</h4>
        <h1>
          LATEST <br /> FASHION SALE
        </h1>
        <p>starting at Rs.999</p>
        <button>SHOP NOW</button>
      </div>
    </div>
  );
}

export default Banner;