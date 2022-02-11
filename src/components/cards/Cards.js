import "./cards.css";

function Cards({ img, link, live, repo }) {
  return (
    <div className="card">
      <div className="overlay"></div>
      <div className="card-browser">
        <div className="card-circle"></div>
        <div className="card-circle"></div>
        <div className="card-circle"></div>
      </div>
      <div className="btn-container">
        <button href={live} target="_blank" className="btn">
          <span>Live</span>
        </button>
        <button href={live} target="_blank" className="btn">
          <span>Repo</span>
        </button>
      </div>
      <img src={img} alt="card img" className="card-img"></img>
    </div>
  );
}
export default Cards;
