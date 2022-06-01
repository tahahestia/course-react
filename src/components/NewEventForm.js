import { useState } from "react";
import "./NewEventForm.css";

const NewEventForm = ({ addEvent }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const clearHandler = () => {
    setTitle("");
    setDate("");
    setLocation("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let event = {
      title,
      date,
      location,
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
        <span>Event Location :</span>
        <input type="date" onChange={(e) => setDate(e.target.value)} value={date} required />
      </label>
      <label>
        <span>Event Location :</span>
        <br />
        <select onClick={(e) => setLocation(e.target.value)} required>
          <option value="">--</option>
          <option value="safi">SAFI</option>
          <option value="eljadida">EL JADIDA</option>
          <option value="casablanca">CASABLANCA</option>
          <option value="rabat">RABAT</option>
        </select>
      </label>
      {(title || date || location) && (
        <p>
          Title : {title} <br /> Date : {date} <br /> Location : {location}
        </p>
      )}
      <div>
        <button>Ajouter</button>
      </div>
      <div>
        <button type="button" onClick={clearHandler} style={{ backgroundColor: "orange", color: "black" }}>
          Vider la forme
        </button>
      </div>
    </form>
  );
};

export default NewEventForm;
