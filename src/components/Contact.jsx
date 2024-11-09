import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    gender: '',
    country: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // To prevent multiple submissions

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from submitting by default
    if (isSubmitting) return; // Check if the form is already being submitted

    setIsSubmitting(true); // Set the flag to true while submitting

    console.log('Form data:', formData);

    // Check if form data is valid
    if (!formData.name || !formData.email || !formData.number || !formData.gender || !formData.country) {
      alert('Please fill in all fields.');
      setIsSubmitting(false); // Reset the submitting flag
      return;
    }

    try {
      const response = await fetch('http://localhost/react_curd/insert.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Backend response:', result);

      // Check the result from the backend
      if (result.success) {
        alert('Data inserted successfully!');
        // Optionally clear form after successful submission
        setFormData({
          name: '',
          email: '',
          number: '',
          gender: '',
          country: '',
        });
      } else {
        alert('Error: ' + result.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false); // Reset the submitting flag after request is completed
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <h2 className='title-head'>Contact Us</h2>
        <div className="row">
          <div className="col-lg-12">
            <div className="contactform">
              <form onSubmit={handleSubmit}>
                <div className="mb-3 mt-3">
                  <label htmlFor="name" className="form-label">Name:</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="Enter Name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="Enter email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="number" className="form-label">Number:</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    id="number" 
                    placeholder="Enter number" 
                    name="number" 
                    value={formData.number} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="gender" className="form-label">Gender:</label>
                  <select 
                    className="form-select" 
                    id="gender" 
                    name="gender" 
                    value={formData.gender} 
                    onChange={handleChange} 
                    required
                  >
                    <option value="other">Other</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="country" className="form-label">Country:</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="country" 
                    placeholder="Enter Country" 
                    name="country" 
                    value={formData.country} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <button type="submit" className="btn btn-warning" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
