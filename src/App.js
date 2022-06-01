import { useState } from "react";
import "./App.css";
import Event from "./components/Event";
import Modal from "./components/Modal";
import NewEventForm from "./components/NewEventForm";
import Title from "./components/Title";

function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
    setShowModal(false);
  };

  const [showEvents, setShowEvents] = useState(true);
  const toggleEventsHandler = () => {
    setShowEvents(!showEvents);
  };

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };

  const deleteHandler = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div className="App">
      <Title title="My title 1" subtitle="subtitle 1" />
      <div>
        <button onClick={() => setShowModal(true)}>Ajouter une nouvelle evenement</button>
      </div>

      {showModal && (
        <Modal handleClose={handleClose}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}

      <button
        onClick={toggleEventsHandler}
        style={{ backgroundColor: showEvents ? "red" : "green" }}
      >
        {showEvents ? "Hide" : "Show"} : Events
      </button>
      {showEvents &&
        (events.length ? (
          <Event events={events} deleteHandler={deleteHandler} />
        ) : (
          <h2>Aucun event disponible !</h2>
        ))}
    </div>
  );
}

export default App;
