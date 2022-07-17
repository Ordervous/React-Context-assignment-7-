import React, { useState } from 'react';
import SignInForm from './SignInForm';
import Welcome from './Welcome';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from './UserContext'

function App() {

  let [user, setUser] = useState({
    username: '',
    // SignIn: '',
    // SignOut: '',
  })

  let { username } = user
  console.log(user)

  function SignIn() {
    setUser({user}) 

      // (user) ? (SignIn{usersname}) : (SignOut())  
      // activate signout button
      //activate name of person 
    
}

function SignOut() {
  user = ""
}

return (
  <UserContext.Provider value={{ user, SignIn, SignOut }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Welcome value={{user}}/>} />
          <Route path="sign-in" element={<SignInForm handleSubmit={SignIn} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </UserContext.Provider>
);
}

export default App;