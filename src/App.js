import React, { useState } from 'react';

const App = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [result, setResult] = useState('');

  const addStudent = () => {
    const newStudent = { name, result };
    setStudents([...students, newStudent]);
    setName('');
    setResult('');
    
  };

  const deleteStudent = (index) => {
    const newStudents = [...students];
    newStudents.splice(index, 1);
    setStudents(newStudents);
  };

  return (
    <div>
      <h1>Student Results</h1>
      <div>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Result"
          value={result}
          onChange={(e) => setResult(e.target.value)}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>
      <div>
        <h2>Students</h2>
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              {student.name} - {student.result}
              <button onClick={() => deleteStudent(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
