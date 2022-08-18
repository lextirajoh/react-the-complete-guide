import React, { useState } from 'react';
import AddUser from './components/AddUser';
import UserList from './components/UserList';

export default function App() {
const [username, setUsername] = useState('')
const [age, setAge] = useState('')



  return (
    <>
      <AddUser />
      <UserList />
    </>
  );
}
