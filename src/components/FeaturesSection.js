import React from "react";

function FeaturesSection() {
    return (
        <div className="container py-5">
            <h2 className="text-center mb-5">Why Choose CommunionHub?</h2>
            <div className="row text-center">
                <div className="col-md-4">
                    <i className="bi bi-calendar-event display-4 mb-3"></i>
                    <h4>Diverse Events</h4>
                    <p>Find events that align with your interests and connect with like-minded individuals.</p>
                </div>
                <div className="col-md-4">
                    <i className="bi bi-easel display-4 mb-3"></i>
                    <h4>User-Friendly</h4>
                    <p>Easy-to-use interface for browsing, filtering, and joining events effortlessly.</p>
                </div>
                <div className="col-md-4">
                    <i className="bi bi-people display-4 mb-3"></i>
                    <h4>Build Community</h4>
                    <p>Join a platform that brings people together for meaningful connections.</p>
                </div>
            </div>
        </div>
    );
}

export default FeaturesSection;
