import React from 'react';

export default function AddUser() {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>Username</p>
        <input type="text" value="username" placeholder="Enter your username" />
        <p>Age (Years)</p>
        <input type="number" value="age" placeholder="Enter your age" />
        <button type="submit">Add User</button>
      </form>
    </>
  );
}
