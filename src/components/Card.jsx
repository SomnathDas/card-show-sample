import "./Card.css";
import arrowImg from "../assets/arrow.svg";

const Card = ({ head, body, image, linkObj }) => {
  return (
    <article className="card-container">
      <div className="card-left">
        <div className="card-info">
          <h1 className="head-primary">{head}</h1>
          <p>{body}</p>
        </div>
        <a className="card-link" href={linkObj.link}>
          {linkObj.title}
          <img src={arrowImg} alt="arrow" className="arrow" />
        </a>
      </div>
      <div className="card-right">
        <img src={image} className="card-image" />
      </div>
      <h1 className="head-secondary">{head}</h1>
    </article>
  );
};

export default Card;
