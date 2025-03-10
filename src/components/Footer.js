import React from "react";

function Footer() {
    return (
        <footer className="bg-primary text-white py-4 mt-5">
            <div className="container text-center">
                <p className="mb-2">&copy; 2025 CommunionHub. All Rights Reserved.</p>
                <div>
                    <a href="https://facebook.com" className="text-white me-3">
                        <i className="bi bi-facebook"></i> Facebook
                    </a>
                    <a href="https://twitter.com" className="text-white me-3">
                        <i className="bi bi-twitter"></i> Twitter
                    </a>
                    <a href="https://instagram.com" className="text-white">
                        <i className="bi bi-instagram"></i> Instagram
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
