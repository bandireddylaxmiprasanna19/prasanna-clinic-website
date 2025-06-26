import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} Prasanna Clinic. All rights reserved.</p>
        <p className="mb-0">
          📞 <strong>Phone:</strong> +91-9876543210 &nbsp; | &nbsp;
          📧 <strong>Email:</strong> prasannaclinic@example.com
        </p>
        <p className="mt-1">
          📍 <strong>Address:</strong> 123, Health Street, Vijayawada, Andhra Pradesh, India
        </p>
      </div>
    </footer>
  );
}

export default Footer;
