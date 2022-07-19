import React, { useState } from 'react';
import SignInForm from './SignInForm';
import Welcome from './Welcome';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from './UserContext'

function App() {

  let [user, setUser] = useState({
    username: null,
    signIn: SignIn,
    signOut: SignOut,
  })

  function SignIn(credentials) {

    setUser(user => ({
      ...user,
      username: credentials.username
    }))


  }

  function SignOut() {
    user = ""
  }

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Welcome value={{ user }} />} />
            <Route path="sign-in" element={<SignInForm handleSubmit={SignIn} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;