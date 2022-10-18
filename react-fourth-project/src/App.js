import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/Store/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //const [loggedInData, setIsLoggedInData] = useState()
  /* const storedUserLoggedInInformation = localStorage.getItem("IsLoggedIn");

  if (storedUserLoggedInInformation === "1") {
    setIsLoggedIn(true); //this would led to the infinite loop to be run that is re-rendering again and again
  } */ /* This infinite loop can be avoided by using useEffect() hook */

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("IsLoggedIn");
    //const [loggedInData, setIsLoggedInData] = useState()

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    //setIsLoggedInData({emailData : email , passwordData: password})
    localStorage.setItem("IsLoggedIn", "1");
    console.log(email, password);
  };

  const logoutHandler = () => {
    localStorage.removeItem("IsLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={
      {
         isLoggedIn: isLoggedIn,
         onLogout: logoutHandler
      }}>
      <MainHeader/>
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}{" "}
        {/* by default isLoggedIn = false */}
        {isLoggedIn && (
          <Home onLogout={logoutHandler} /* loginData={loggedInData} */ />
        )}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
