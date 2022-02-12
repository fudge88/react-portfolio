import "./cards.css";

function Cards({ img, repo }) {
  return (
    <div className="card">
      <div className="overlay"></div>
      <div className="card-browser">
        <div className="card-circle"></div>
        <div className="card-circle"></div>
        <div className="card-circle"></div>
      </div>
      <div className="btn-container">
        <button href={repo} target="_blank" className="btn">
          <span>Repo</span>
        </button>
      </div>
      <img src={img} alt="card img" className="card-img"></img>
    </div>
  );
}
export default Cards;
