import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { motion } from "framer-motion";

function FilterWithToggle({ categories, onFilter, children }) {
    const [showModal, setShowModal] = useState(false);

    const handleToggleModal = () => setShowModal(!showModal);

    return (
        <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
                <label htmlFor="categoryFilter" className="form-label me-3">Filter by Category:</label>
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

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button variant="primary" onClick={handleToggleModal}>
                    {showModal ? "Close Form" : "Add New Event"}
                </Button>
            </motion.div>

            <Modal show={showModal} onHide={handleToggleModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>{children}</Modal.Body>
            </Modal>
        </div>
    );
}

export default FilterWithToggle;
