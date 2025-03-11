import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "./AboutPage.css"; // Import the specific CSS file

function AboutPage() {
    
    return (
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <Container className="about-container">
                {/* Header Section */}
                <Row className="about-header">
                    <Col>
                        <h1 className="display-4 fw-bold">About CommunionHub</h1>
                        <p className="lead text-muted">
                            Connecting people across faiths through events and shared experiences.
                        </p>
                    </Col>
                </Row>

                {/* Features Section */}
                <Row className="g-4">
                    {/* Feature 1 */}
                    <Col md={4}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Card className="about-card">
                                <Card.Body>
                                    <Card.Title className="about-title">Our Mission</Card.Title>
                                    <Card.Text className="about-text">
                                        To bridge communities by enabling connections through shared events
                                        and interests.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>

                    {/* Feature 2 */}
                    <Col md={4}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Card className="about-card">
                                <Card.Body>
                                    <Card.Title className="about-title">What We Offer</Card.Title>
                                    <Card.Text className="about-text">
                                        A platform to discover events, connect with like-minded individuals, 
                                        and build stronger communities.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>

                    {/* Feature 3 */}
                    <Col md={4}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Card className="about-card">
                                <Card.Body>
                                    <Card.Title className="about-title">Why Join Us?</Card.Title>
                                    <Card.Text className="about-text">
                                        Experience seamless event management, real-time updates, and a vibrant 
                                        community all in one place.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    );
}

export default AboutPage;
