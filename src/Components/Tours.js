import "./Tours.css";
import Card from "./Card.js";

function Tours(props) {
  return (
    <div className="big">
      <div className="heading">
        <h1>Plan with Anshu</h1>
      </div>
      <div className="container">
        {props.tours.map((tour) => {
          return <Card {...tour} remove={props.remove}/>;
        })}
      </div>
    </div>
  );
}
export default Tours;
