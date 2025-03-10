import React, { useState, useEffect } from "react";
import axios from "axios";
import EventList from "../components/EventList";
import EventForm from "../components/EventForm";

function EventsPage() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/events")
            .then((res) => setEvents(res.data))
            .catch((err) => console.error(err));
    }, []);

    const addEvent = (event) => {
        axios.post("http://localhost:5000/events", event)
            .then(() => setEvents([...events, event]))
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <EventForm onAddEvent={addEvent} />
            <EventList events={events} />
        </div>
    );
}

export default EventsPage;
