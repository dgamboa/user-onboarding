import React from 'react';

export default function Form(props) {
  // (4) Destructure props:
  const { values, change, submit, disabled, errors } = props

  // (6) Helper Functions:
  const onChange = (event) => {
    const { name, type, value, checked } = event.target;
    const valueToChange = type === 'checkbox' ? checked : value;
    change(name, valueToChange);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    submit()
  }

  return (
    // (5) JSX Structure for Form:
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group header'>
        <h2>Add User</h2>

        <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.terms}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <label>Name: 
          <input
            type='text'
            name='name'
            value={values.name}
            onChange={onChange}
          />
        </label>

        <label>Email: 
          <input
            type='email'
            name='email'
            value={values.email}
            onChange={onChange}
          />
        </label>

        <label>Password: 
          <input
            type='password'
            name='password'
            value={values.password}
            onChange={onChange}
          />
        </label>

        <label>Terms of Service: 
          <input
            type='checkbox'
            name='terms'
            checked={values.terms}
            onChange={onChange}
          />
        </label>
      </div>

      <div className='submit-button'>
        <button disabled={disabled}>Submit</button>
      </div>
    </form>
  )
}