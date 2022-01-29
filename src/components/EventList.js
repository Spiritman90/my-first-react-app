import React from "react";
import styles from "./EventList.module.css";

function EventList({ events, handleclick }) {
  return (
    <div>
      {events.map((event, index) => (
        <div className={styles.card} key={event.id}>
          <h2>
            {index}-{event.title}
          </h2>
          <p>
            <b>
              {event.location} - {event.date}
            </b>
          </p>
          <button onClick={() => handleclick(event.id)}>Delete event</button>
        </div>
      ))}
    </div>
  );
}

export default EventList;