import React from 'react';
import axios from'axios';
const doctorList = [
  {
    name: 'Dr. Anjali Mehta',
    specialty: 'Pediatrician',
    image: 'https://cdn-icons-png.flaticon.com/512/3774/3774299.png',
  },
  {
    name: 'Dr. Karthik Sharma',
    specialty: 'General Physician',
    image:'https://cdn-icons-png.flaticon.com/512/3774/3774299.png',
  
  },
  {
    name: 'Dr. Ravi Verma',
    specialty: 'Surgeon',
    image:' https://cdn-icons-png.flaticon.com/512/3774/3774299.png',
  },
  {
    name: 'Dr. Meera Singh',
    specialty: 'Dermatologist',
    image:'https://cdn-icons-png.flaticon.com/512/3774/3774299.png',
  },
];

function Doctors() {
  return (
    <div className="container py-5">
      <h2 className="text-center text-primary mb-3">Meet Our Doctors</h2>
      <p className="text-center text-muted mb-5">
        Our animated-style doctors are friendly & professional.
      </p>
      <div className="row">
        {doctorList.map((doctor, index) => (
          <div className="col-md-3" key={index}>
            <div className="card mb-4 shadow-sm text-center">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="card-img-top mx-auto"
                style={{ width: '100px', height: '100px', objectFit: 'contain', marginTop: '15px' }}
              />
              <div className="card-body">
                <h5 className="card-title text-primary">{doctor.name}</h5>
                <p className="card-text text-muted">{doctor.specialty}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;
