import React, { useState } from 'react';
import './App.css';
import SubjectForm from './components/SubjectForm';
import SubjectList from './components/SubjectList';
import ResultDisplay from './components/ResultDisplay';
import Buttons from './components/Buttons';

function App() {
  const [subjects, setSubjects] = useState([]);
  const [sgpa, setSgpa] = useState(0);
  const [cgpa, setCgpa] = useState(0);

  const addSubject = (subject) => {
    setSubjects([...subjects, subject]);
  };

  const removeSubject = (index) => {
    const newSubjects = subjects.filter((_, i) => i !== index);
    setSubjects(newSubjects);
  };

  const calculateResult = () => {
    if(subjects.length === 0){
      alert('No subject to calculate!');
      return;
    }

    const totalGradePoints = subjects.reduce(
      (sum, subject) => sum + subject.grade * subject.credits,
      0
    );

    const totalCredits = subjects.reduce((sum, subject) => sum + subject.credits, 0);
    const calculatedSgpa = totalGradePoints / totalCredits;
    const calculatedCgpa = calculatedSgpa;

    setSgpa(calculatedSgpa);
    setCgpa(calculatedCgpa);
  };

  const resetData = () => {
    setSubjects([]);
    setSgpa(0);
    setCgpa(0);
  }


  return (
    <div>
      <h1>SGPA/CGPA Calculator</h1>
      <SubjectForm addSubject={addSubject} />
      <SubjectList subjects={subjects} removeSubject={removeSubject} />
      <Buttons calculateResult={calculateResult} resetData={resetData} />
      <ResultDisplay sgpa={sgpa} cgpa={cgpa} />
    </div>
  );
}

export default App;
