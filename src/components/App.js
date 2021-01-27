import axios from 'axios';
import React, { useState } from 'react';
import Form from './Form';
import User from './User';

// - [ ] Name
// - [ ] Email
// - [ ] Password
// - [ ] Terms of Service (checkbox)
// - [ ] A Submit button to send our form data to the server.

// (1) Initial States:
const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false
};

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: ''
};

const initialDisabled = true;
const initialUsers = [];

export default function App() {
  // (2) Application State Hooks:
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [users, setUsers] = useState(initialUsers);

  // (7) Helper Functions:
  const inputChange = (name, value) => {
    setFormValues({...formValues, [name]: value})
  }

  const formSubmit = () => {
    
  }

  return (
    // (3) Basic JSX Structure for App:
    <div className="container">
      <header><h1>User Onboarding App</h1></header>

      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        users.map(user => {
          return <User key={user.id} details={user}/>
        })
      }
    </div>
  );
}
