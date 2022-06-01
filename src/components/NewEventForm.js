import { useState } from "react";
import "./NewEventForm.css";

const NewEventForm = ({ addEvent }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  // const handleChange = (e) => {
  //   console.log(e.target.value);
  // };
  const clearHandler = () => {
    setTitle("");
    setDate("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let event = {
      title,
      date,
      id: Math.floor(Math.random() * 100000),
    };
    if (title && date) {
      console.log(event);
      clearHandler();
      addEvent(event);
    } else alert("remplir");
  };
  return (
    <form className="new-event-form" onSubmit={submitHandler}>
      <label>
        <span>Event title :</span>
        <input
          type="text"
          placeholder="event title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
      </label>
      <label>
        <span>Event Date :</span>
        <input type="date" onChange={(e) => setDate(e.target.value)} value={date} required />
      </label>
      {(title || date) && (
        <p>
          Title : {title} <br /> Date : {date}
        </p>
      )}
      <div>
        <button>Ajouter</button>
      </div>
      <div>
        <button
          type="button"
          onClick={clearHandler}
          style={{ backgroundColor: "orange", color: "black" }}
        >
          Vider la forme
        </button>
      </div>
    </form>
  );
};

export default NewEventForm;
