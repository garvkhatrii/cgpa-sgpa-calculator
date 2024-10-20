import React from "react";

function SubjectList({ subjects, removeSubject }) {
    return (
        <div>
            <h2>Subjects</h2>
            <ul>
                {subjects.map((subject, index) => (
                    <li key={index}>
                        Grade: {subject.grade}, Credits: {subject.credits}
                        <button onClick={() => removeSubject(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SubjectList;