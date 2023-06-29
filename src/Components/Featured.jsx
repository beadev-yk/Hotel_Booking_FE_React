import "../Styling/Featured.css";
const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItems">
            <img src="./images/maldives.jpg" alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h3>City Name</h3>
                <h6>location</h6>
        </div>
      </div>
      <div className="featuredItems">
        <img src="./images/temple.jpg" alt="" className="featuredImg" />
        <div className="featuredTitle">
            <h3>City Name</h3>
            <h6>location</h6>
        </div>
      </div>
      <div className="featuredItems">
        <img src="./images/random.jpg" alt="" className="featuredImg" />
        <div className="featuredTitle">
            <h3>City Name</h3>
            <h6>location</h6>
        </div>
      </div>
    </div>
  );
};

export default Featured;
