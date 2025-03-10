import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function EventFilterSection({ categories, onFilter, onAddEvent }) {
    const [showModal, setShowModal] = useState(false);

    const handleToggleModal = () => setShowModal(!showModal);

    return (
        <div
            className="d-flex align-items-center justify-content-between text-center py-5"
            style={{
                backgroundImage: "url('https://source.unsplash.com/1600x900/?event')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
            }}
        >
            <div className="container">
                <h1 className="display-5">Discover and Add Events</h1>
                <p className="lead">Filter events by category or add your own to the community.</p>

                {/* Filter Dropdown */}
                <div className="d-inline-block me-3">
                    <label htmlFor="categoryFilter" className="form-label">Filter by Category:</label>
                    <select
                        id="categoryFilter"
                        className="form-select d-inline-block w-auto"
                        onChange={(e) => onFilter(e.target.value)}
                    >
                        <option value="">All</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                </div>

                {/* Add Event Button */}
                <Button
                    variant="primary"
                    onClick={handleToggleModal}
                    className="btn-lg"
                >
                    Add New Event
                </Button>

                {/* Add Event Modal */}
                <Modal show={showModal} onHide={handleToggleModal} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Add a New Event</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const newEvent = {
                                    title: e.target.title.value,
                                    date: e.target.date.value,
                                    location: e.target.location.value,
                                    description: e.target.description.value,
                                    category: e.target.category.value,
                                };
                                onAddEvent(newEvent);
                                setShowModal(false);
                            }}
                        >
                            <div className="mb-3">
                                <label className="form-label">Title</label>
                                <input type="text" name="title" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Date</label>
                                <input type="date" name="date" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Location</label>
                                <input type="text" name="location" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea name="description" className="form-control" required></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Category</label>
                                <select name="category" className="form-select" required>
                                    <option value="">Select Category</option>
                                    {categories.map((category, index) => (
                                        <option key={index} value={category}>{category}</option>
                                    ))}
                                </select>
                            </div>
                            <Button type="submit" variant="primary">Add Event</Button>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
}

export default EventFilterSection;
