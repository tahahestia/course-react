import "./Events.css";
import styles from "./Event.module.css";

const Event = ({ events, deleteHandler }) => {
  return events.map((event) => (
    <div className={"events-block " + styles.card} key={event.id}>
      <h2>{event.title}</h2>
      <h3>{event.location.toUpperCase()}</h3>
      <p>{event.date}</p>
      <button onClick={() => deleteHandler(event.id)}>Supprimer</button>
    </div>
  ));
};

export default Event;
