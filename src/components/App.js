import React, { useState } from 'react';
import Form from './Form';

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
  termsOfService: false
};

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  termsOfService: ''
};

const initialDisabled = true;
const initialUsers = [];

export default function App() {
  // (2) Application State Hooks:
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [users, setUsers] = useState(initialUsers);

  // () Helper Functions:

  return (
    // (3) Basic JSX Structure for App:
    <div className="App">
      <header><h1>User Onboarding App</h1></header>

      <Form />

      {
        users.map(user => {
          return <User key={user.id} details={user}/>
        })
      }
    </div>
  );
}
