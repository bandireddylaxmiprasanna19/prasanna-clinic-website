import React from 'react';

function Home() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 text-primary">Welcome to Prasanna Clinic</h1>
        <p className="lead">Your health is our top priority. Book appointments, meet doctors, and manage your care with ease.</p>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title text-primary">Book Appointment</h5>
              <p className="card-text">Schedule appointments with our experienced doctors online.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title text-primary">Our Doctors</h5>
              <p className="card-text">Meet our team of trusted medical professionals.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title text-primary">Contact & Support</h5>
              <p className="card-text">Get in touch for queries, feedback, or emergency help.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
