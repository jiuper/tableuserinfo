import React from 'react';
import './App.css';
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Table } from './page/table/Table';
import { SighUp } from './page/sighup/SighUp';
import { User } from './page/user/User';
import { Home } from './page/home/Home';

export const App = () => {

  const [user, setUser] = useState([
    {
      id: Date.now() + 1,
      name: 'Kirill',
      surname: 'Pechan',
      age: 26,
      nationality: 'Belarusion',
      married: 'married'
    },
    {
      id: Date.now() + 2,
      name: 'Alex',
      surname: 'Koval',
      age: 25,
      nationality: 'Belarusion',
      married: 'single'
    },
    {
      id: Date.now() + 3,
      name: 'Alexsandr',
      surname: 'Lukashenco',
      age: 68,
      nationality: 'Belarusion',
      married: 'single'
    }
  ])

  const [profile, setProfile] = useState({})

  return (
    <>
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/Table/*' element={
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
