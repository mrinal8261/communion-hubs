import React, { useState, useEffect } from "react";
import axios from "axios";
import EventHeader from "../components/EventHeader";
import EventList from "../components/EventList";

function EventsPage() {
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [filter, setFilter] = useState("");

    // Fetch events from the backend
    useEffect(() => {
        axios.get("http://localhost:5000/events")
            .then((res) => {
                setEvents(res.data);
                setFilteredEvents(res.data); // Initialize filtered events
            })
            .catch((err) => console.error(err));
    }, []);

    // Handle event filtering by category
    const handleFilter = (category) => {
        setFilter(category);
        if (category === "") {
            setFilteredEvents(events);
        } else {
            setFilteredEvents(events.filter((event) => event.category === category));
        }
    };

    // Add a new event
    const addEvent = (newEvent) => {
        axios.post("http://localhost:5000/events", newEvent)
            .then(() => {
                setEvents([...events, newEvent]);
                if (!filter || filter === newEvent.category) {
                    setFilteredEvents([...filteredEvents, newEvent]);
                }
            })
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <EventHeader
                categories={["Religious", "Social", "Charity"]}
                onFilter={handleFilter}
                onAddEvent={addEvent}
            />

            <div className="container py-4">
                <h2 className="mb-4 text-center">Available Events</h2>
                <EventList events={filteredEvents} />
            </div>
        </div>
    );
}

export default EventsPage;
