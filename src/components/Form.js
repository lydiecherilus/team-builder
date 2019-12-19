
import React, { useState } from 'react';

const Form = props => {
  const [note, setNote] = useState({
    name: '',
    email: '',
    role: ''
  });

const handleChanges = event => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault()
    props.submit(note)
    setNote({
      name: '',
      email: '',
      role: ''
    });
  }

return (
    <div className="App">
      <h1>Membership Form</h1>

      <form onSubmit={submitForm}>
        <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              placeholder="member name"
              onChange={handleChanges}
              name="name"
              value={note.name}        
            />
             
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="text"
              placeholder="member email"
              onChange={handleChanges}
              name="email"
              value={note.email}                         
            />
         
            <label htmlFor="role">Role:</label>
            <input
              id="role"
              type="text"
              placeholder="member role"
              onChange={handleChanges}
              name="role"
              value={note.role}                             
            />
          
        </div>
            <button type="submit">Add Member</button>
    </form>
</div>
);
}
export default Form;

