import React from 'react';
import './App.css';
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Table } from './page/table/Table';
import { SighUp } from "./page/sighup/SighUp";
import { User } from './page/user/User';

export const App = () => {

  const [user, setUser] = useState([
    {
      id: Date.now() + 1,
      name: 'Kirill',
      surname: 'Pechan',
      age: 26
    },
    {
      id: Date.now() + 2,
      name: 'Alex',
      surname: 'Koval',
      age: 25
    },
    {
      id: Date.now() + 3,
      name: 'Alexsandr',
      surname: 'Lukashenco',
      age: 68
    }
  ])

  const [profile, setProfile] = useState({})

  return (
    <>
      <Routes>
        <Route path='/:name' element={
          <Table
            user={user}
            setProfile={setProfile}
          />} />
        <Route path='/SighUp/*' element={
          <SighUp
            user={user}
            setUser={setUser}
          />} />
        <Route path='/User/*' element={
          <User
            user={user}
            setUser={setUser}
            setProfile={setProfile}
            profile={profile}
          />} />
      </Routes>
    </>
  );
}
