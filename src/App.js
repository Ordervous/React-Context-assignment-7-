import React from 'react';
import SignInForm from './SignInForm';
import Welcome from './Welcome';
import Home from './Home';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import UserContext from './UserContext'

function App() {
  return (
    <UserContext.Provider value={user}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Welcome />} />
          <Route path="sign-in" element={<SignInForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </UserContext.Provider>
  );
}

export default App;
