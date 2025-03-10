import React, { useState } from "react";

function EventForm({ onAddEvent }) {
    const [event, setEvent] = useState({
        title: "",
        date: "",
        location: "",
        description: "",
        category: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent({ ...event, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddEvent(event);
        setEvent({ title: "", date: "", location: "", description: "", category: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                    type="text"
                    name="title"
                    value={event.title}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Event Title"
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Date</label>
                <input
                    type="date"
                    name="date"
                    value={event.date}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Location</label>
                <input
                    type="text"
                    name="location"
                    value={event.location}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Location"
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                    name="description"
                    value={event.description}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Event Description"
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Category</label>
                <select
                    name="category"
                    value={event.category}
                    onChange={handleChange}
                    className="form-select"
                    required
                >
                    <option value="">Select Category</option>
                    <option value="Religious">Religious</option>
                    <option value="Social">Social</option>
                    <option value="Charity">Charity</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Add Event</button>
        </form>
    );
}

export default EventForm;
