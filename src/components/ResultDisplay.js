import React from "react";

function ResultDisplay({ sgpa, cgpa}) {
    return (
        <div>
            <h2>Results</h2>
            <p>SGPA: {sgpa.toFixed(2)}</p>
            <p>CGPA: {cgpa.toFixed(2)}</p>
        </div>
    );
}

export default ResultDisplay;