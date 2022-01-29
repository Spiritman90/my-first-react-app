import "./NewEventForm.css";
import React from "react";
import { useState } from "react";

function NewEventForm({ addEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("Lagos");

  const resetForm = () => {
    setTitle("");
    setDate("");
    setLocation("Lagos");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      title: title,
      date: date,
      location: location,
      id: Math.floor(Math.random() * 10000),
    };
    addEvent(event);
    resetForm();
  };

  return (
    <form className='new-event-form' onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input
          type='text'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input
          type='date'
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <label>
        <span>Event Location:</span>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value='Lagos'>Lagos</option>
          <option value='Abuja'>Abuja</option>
          <option value='Ibadan'>Ibadan</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
}

export default NewEventForm;
