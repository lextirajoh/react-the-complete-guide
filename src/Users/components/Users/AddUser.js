import React from 'react';

export default function AddUser() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" placeholder="Enter your username" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" placeholder="Enter your age" />
        <button type="submit">Add User</button>
      </form>
    </>
  );
}
