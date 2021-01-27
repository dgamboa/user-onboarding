import React, { useEffect, useState } from 'react';
import Form from './Form';
import User from './User';
import axios from 'axios';
import schema from '../validation/formSchema';
import * as yup from 'yup';

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

  // (9) Validation Helper:
  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(valid => setFormErrors({ ...formErrors, [name]: ' '}))
      .catch(e => setFormErrors({ ...formErrors, [name]: e.errors[0] }))
  };

  // (11) POST Request Helper:
  const postNewUser = (user) => {
    axios.post('https://reqres.in/api/users', user)
      .then(res => {
        console.log(res);
        setUsers([...users, res.data]);
      })
      .catch(err => {
        console.log(err);
        debugger;
      })
      .finally( () => {
        setFormValues(initialFormValues);
      })
  };

  // (7) Helper Functions:
  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value})
  };

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms
    };
    postNewUser(newUser);
  };

  // (10) Set Up Side Effects:
  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    })
  }, [formValues])

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
