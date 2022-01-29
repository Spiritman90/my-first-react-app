import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvent, setShowEvent] = useState(true);
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
    setShowModal(false);
  };

  const handleclick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };

  const subtitle = "All the latest events in Marioland";

  return (
    <div className='App'>
      <Title title='All the events in my area' subtitle={subtitle} />
      {showEvent && (
        <div>
          <button onClick={() => setShowEvent(false)}>hide event</button>
        </div>
      )}
      {!showEvent && (
        <div>
          <button onClick={() => setShowEvent(true)}>show event</button>
        </div>
      )}

      {showEvent && <EventList events={events} handleclick={handleclick} />}
      {showModal && (
        <Modal isSalesModal={true}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}
      <div>
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          Add New Event
        </button>
      </div>
    </div>
  );
}

export default App;
