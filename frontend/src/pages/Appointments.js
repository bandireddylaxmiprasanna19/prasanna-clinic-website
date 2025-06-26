import React, { useState } from 'react';
import axios from 'axios';

function AppointmentForm() {
  const [formData, setFormData] = useState({
    patient_name: '',
    doctor: '',
    date: '',
    time: '',
    reason: '',
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const validateForm = () => {
    let newErrors = {};
    if (!formData.patient_name.trim()) newErrors.patient_name = 'Patient name is required';
    if (!formData.doctor.trim()) newErrors.doctor = 'Doctor name is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.reason.trim()) newErrors.reason = 'Reason is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess('');
    if (validateForm()) {
      axios.post('http://localhost:8000/api/appointments/', formData)
        .then(res => {
          setSuccess('Appointment successfully booked!');
          setFormData({
            patient_name: '',
            doctor: '',
            date: '',
            time: '',
            reason: '',
          });
          setErrors({});
        })
        .catch(err => {
          alert('Error submitting form. Try again.');
          console.error(err);
        });
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 text-primary">Book an Appointment</h2>
      {success && <div className="alert alert-success">{success}</div>}
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">

        <div className="mb-3">
          <label className="form-label">Patient Name</label>
          <input
            type="text"
            className={`form-control ${errors.patient_name && 'is-invalid'}`}
            name="patient_name"
            value={formData.patient_name}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.patient_name}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Doctor</label>
          <input
            type="text"
            className={`form-control ${errors.doctor && 'is-invalid'}`}
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.doctor}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            className={`form-control ${errors.date && 'is-invalid'}`}
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.date}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Time</label>
          <input
            type="time"
            className={`form-control ${errors.time && 'is-invalid'}`}
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.time}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Reason</label>
          <textarea
            className={`form-control ${errors.reason && 'is-invalid'}`}
            name="reason"
            rows="3"
            value={formData.reason}
            onChange={handleChange}
          ></textarea>
          <div className="invalid-feedback">{errors.reason}</div>
        </div>

        <button type="submit" className="btn btn-primary w-100">Submit Appointment</button>
      </form>
    </div>
  );
}

export default AppointmentForm;
