import React, { useState } from "react";

function SubjectForm({ addSubject }) {
    const [grade, setGrade] = useState('');
    const [credits, setCredits] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!grade || !credits) {
            alert('Please enter both grade and credits');
            return;
        }
        addSubject({ grade: parseFloat(grade), credits: parseInt(credits) });
        setGrade('');
        setCredits('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                placeholder="GradePoints"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                step="0.01"
                min="0"
                max="10"
            />
            <input
                type="number"
                placeholder="Course Credit"
                value={credits}
                onChange={(e) => setCredits(e.target.value)}
                min="1"
            />
            <button type="submit">Add Subject</button>
        </form>
    );
}

export default SubjectForm;