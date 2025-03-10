import React from "react";

function EventList({ events }) {
    return (
        <ul className="space-y-4">
            {events.map((event, index) => (
                <li key={index} className="p-4 border rounded">
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <p>Date: {event.date}</p>
                    <p>Location: {event.location}</p>
                    <p>{event.description}</p>
                </li>
            ))}
        </ul>
    );
}

export default EventList;
