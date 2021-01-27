import React from 'react';

export default function User({ details }) {
  if (!details) {
    return <h3>Working on getting users...</h3>
  }

  return (
    <div className="user">
      <h3>{details.name}</h3>
      <p>{details.email}</p>
    </div>
  )
}