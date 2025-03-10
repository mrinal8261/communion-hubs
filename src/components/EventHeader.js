import React, { useState } from "react";
import { Navbar, Nav, Modal, Button, Container } from "react-bootstrap";

function EventHeader({ categories, onFilter, onAddEvent }) {
    const [showModal, setShowModal] = useState(false);

    // Toggle the Add Event modal
    const handleToggleModal = () => setShowModal(!showModal);

    return (
        <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
            <Container>
                {/* Brand Name */}
                <Navbar.Brand href="/">Events Manager</Navbar.Brand>

                {/* Filter Dropdown */}
                <Nav className="ms-auto d-flex align-items-center">
                   
                    <select
                        id="categoryFilter"
                        className="form-select"
                        onChange={(e) => onFilter(e.target.value)}
                        style={{ width: "200px" }}
                    >
                        <option value="">All Categories</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                </Nav>

                {/* Toggle Icon (☰) for Popup */}
                <Button
                    variant="outline-light"
                    className="ms-3"
                    onClick={handleToggleModal}
                >
                    ☰
                </Button>
            </Container>

            {/* Add Event Popup Modal */}
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
                                    <option key={index} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <Button type="submit" variant="primary" className="w-100">
                            Submit
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>
        </Navbar>
    );
}

export default EventHeader;
