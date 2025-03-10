import React from "react";
import { motion } from "framer-motion";

function HeroSection() {
    return (
        <motion.div
            className="bg-light text-center py-5"
            style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?community')", backgroundSize: "cover", backgroundPosition: "center" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <div className="bg-dark bg-opacity-50 text-white p-5 rounded">
                <motion.h1
                    className="display-4"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1 }}
                >
                    Connecting People Across Faiths & Interests
                </motion.h1>
                <p className="lead mt-3">Join events that matter, and build meaningful connections with like-minded people.</p>
                <motion.a
                    href="/events"
                    className="btn btn-primary btn-lg mt-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Explore Events
                </motion.a>
            </div>
        </motion.div>
    );
}

export default HeroSection;
