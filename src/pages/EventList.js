import React from "react";
import { Card, Row, Col } from "react-bootstrap";

function EventList({ events }) {
    return (
        <Row>
            {events.length > 0 ? (
                events.map((event, index) => (
                    <Col key={index} md={6} lg={4} className="mb-4">
                        <Card className="h-100 shadow-sm hover-shadow">
                            <Card.Body>
                                <Card.Title className="text-primary">
                                    {event.title}
                                </Card.Title>
                                <Card.Text>
                                    <strong>Date:</strong> {event.date}<br />
                                    <strong>Location:</strong> {event.location}<br />
                                    <strong>Category:</strong> {event.category}
                                </Card.Text>
                                <Card.Text>{event.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            ) : (
                <p className="text-center text-muted">No events found for this category.</p>
            )}
        </Row>
    );
}

export default EventList;
