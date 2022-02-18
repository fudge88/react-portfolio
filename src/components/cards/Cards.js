import "./cards.css";

function Cards({ img, live, repo }) {
  return (
    <div className="card">
      <div className="overlay"></div>
      <div className="card-browser">
        <div className="card-circle"></div>
        <div className="card-circle"></div>
        <div className="card-circle"></div>
      </div>
      <div className="btn-container">
        <a href={live} target="_blank" className="btn">
          <span>Live</span>
        </a>
        <a href={repo} target="_blank" className="btn">
          <span>Repo</span>
        </a>
      </div>
      <img src={img} alt="card img" className="card-img"></img>
    </div>
  );
}
export default Cards;
