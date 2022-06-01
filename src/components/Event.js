import "./Events.css";
import styles from "./Event.module.css";

const Event = ({ events, deleteHandler }) => {
  return events.map((event) => (
    <div className={"events-block " + styles.card} key={event.id}>
      <h1>{event.title}</h1>
      <p>{event.date}</p>
      <button onClick={() => deleteHandler(event.id)}>Supprimer</button>
    </div>
  ));
};

export default Event;
