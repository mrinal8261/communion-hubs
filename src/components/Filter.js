import React from "react";

function Filter({ categories, onFilter }) {
    return (
        <div className="mb-4">
            <label htmlFor="categoryFilter" className="form-label">Filter by Category:</label>
            <select
                id="categoryFilter"
                className="form-select"
                onChange={(e) => onFilter(e.target.value)}
            >
                <option value="">All</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                ))}
            </select>
        </div>
    );
}

export default Filter;
