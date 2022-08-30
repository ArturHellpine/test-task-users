import React, {useEffect, useState} from 'react'
import './styles/App.css'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context/context";

function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setLoading(false)
    }, [])
  return (
      <AuthContext.Provider value={{isAuth, setIsAuth, loading, setLoading}}>
          <BrowserRouter>
              <AppRouter />
          </BrowserRouter>
      </AuthContext.Provider>
  );
}

export default App;
