import React, { useEffect, useState } from 'react';

function ContactsList() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    number: '',
    gender: '',
    country: '',
  });

  // Fetch contacts on initial load
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    fetch('http://localhost/react_curd/fetch_contact.php')
      .then((response) => response.json())
      .then((data) => {
        setContacts(data);
      })
      .catch((error) => console.error('Error fetching contacts:', error));
  };

  // contact deletion
  const handleDelete = (id) => {
    fetch('http://localhost/react_curd/delete_contact.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }), // Ensure id is correctly passed as JSON
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message); 
        fetchContacts(); 
      })
      .catch((error) => console.error('Error deleting contact:', error));
  };

  // contact form for editing
  const handleEdit = (contact) => {
    setEditingContact(contact.id);
    setFormData(contact);
  };

  // Handle form data change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle contact update
  const handleUpdate = () => {
    fetch('http://localhost/react_curd/update_contact.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text()) // Get raw response text
      .then((textResponse) => {
        console.log('Response from PHP:', textResponse); // Log the response text to inspect it
  
        try {
          const data = JSON.parse(textResponse); // Try parsing the response as JSON
          alert(data.message);
          setEditingContact(null);
          fetchContacts(); // Refresh the contacts list
        } catch (error) {
          console.error('Failed to parse JSON:', error);
          alert('Error: Response is not valid JSON');
        }
      })
      .catch((error) => {
        console.error('Error updating contact:', error);
        alert('Error updating contact');
      });
  };
  

  return (
    <div className="tablestyle container">

      <center>
        <h2>Contact List</h2>
      </center>

      <table border="1">
        <thead>
          <tr>
            <th>S_no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Country</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <tr key={contact.id}>
                {editingContact === contact.id ? (
                  <>
                    <td>{contact.id}</td>
                    <td>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="number"
                        value={formData.number}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>
                      <button className="btnedit" onClick={handleUpdate}>
                        Save
                      </button>
                      <button
                        className="btndelete"
                        onClick={() => setEditingContact(null)}
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{contact.id}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.number}</td>
                    <td>{contact.gender}</td>
                    <td>{contact.country}</td>
                    <td>
                      <button
                        className="btnedit"
                        onClick={() => handleEdit(contact)}
                      >
                        <i className="fa fa-edit"></i>
                      </button>
                      <button
                        className="btndelete"
                        onClick={() => handleDelete(contact.id)}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No contacts found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ContactsList;
