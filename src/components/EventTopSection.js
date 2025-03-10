import React, { useState } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";

function EventTopSection({ categories, onFilter, onAddEvent }) {
    const [showModal, setShowModal] = useState(false);

    const handleToggleModal = () => setShowModal(!showModal);

    return (
        <div
            className="text-center py-5"
            style={{
                backgroundImage: "url('https://source.unsplash.com/1600x900/?event,community')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
            }}
        >
            <div className="container">
                <h1 className="display-5 mb-3">Find and Add Events</h1>
                <Row className="justify-content-center">
                    {/* Filter Dropdown */}
                    <Col xs="auto" className="mb-3 mb-md-0">
                        <label htmlFor="categoryFilter" className="form-label">
                            Filter by Category:
                        </label>
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
                    </Col>

                    {/* Add Event Button */}
                    <Col xs="auto">
                        <Button
                            variant="primary"
                            onClick={handleToggleModal}
                            className="btn-lg shadow"
                        >
                            Add New Event
                        </Button>
                    </Col>
                </Row>

                {/* Add Event Modal */}
                <Modal show={showModal} onHide={handleToggleModal} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Event</Modal.Title>
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
                                <textarea name="description" className="form-control" rows="3" required></textarea>
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
                            <Button type="submit" variant="primary" className="w-100">
                                Submit
                            </Button>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
}

export default EventTopSection;
