import React from 'react';

function About() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-5 text-primary">About Prasanna Clinic</h2>
        <p className="lead text-muted">
          Learn more about our mission, values, and commitment to your health.
        </p>
      </div>

      <div className="row align-items-center g-5">
        <div className="col-md-6">
          <img
            src="https://img.freepik.com/free-photo/happy-doctor-with-stethoscope-hospital_1303-17824.jpg"
            alt="Clinic"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-secondary">Who We Are</h4>
          <p>
            Prasanna Clinic is dedicated to providing exceptional medical care to our patients. Our experienced team of doctors and staff are committed to your well-being.
          </p>
          <p>
            Whether you're visiting for a regular check-up or in need of specialized treatment, we ensure compassionate, professional, and affordable healthcare services.
          </p>
          <ul className="list-group list-group-flush mt-3">
            <li className="list-group-item">✅ Friendly and professional staff</li>
            <li className="list-group-item">✅ Modern equipment and facilities</li>
            <li className="list-group-item">✅ Easy online appointment system</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
