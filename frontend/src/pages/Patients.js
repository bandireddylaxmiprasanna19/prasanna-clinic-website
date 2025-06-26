import React from 'react';

const patientList = [
  { name: 'Ravi Kumar', age: 35, gender: 'Male', condition: 'Fever' },
  { name: 'Anjali Sharma', age: 28, gender: 'Female', condition: 'Skin Allergy' },
  { name: 'Rahul Verma', age: 42, gender: 'Male', condition: 'Back Pain' },
];

function Patients() {
  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="display-6 text-primary">Patient Records</h2>
        <p className="text-muted">Overview of patients currently registered in the system</p>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover shadow-sm">
          <thead className="table-primary">
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Condition</th>
            </tr>
          </thead>
          <tbody>
            {patientList.map((patient, index) => (
              <tr key={index}>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>
                <td>{patient.condition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Patients;
