import './App.css';
import React, { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { authProtectedRoutes, publicRoutes } from './routes';
import Authmiddleware from './routes/route';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

function App() {
  const location = window.location;
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (location.pathname === "/") {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [location.pathname])
  return (
    <React.Fragment>
      <div className="bg-dark text-white py-4 position-relative" style={{ height: "20vh" }}>
        <h1 className="text-center mb-0">Post Surgery Analysis</h1>
        {
          show &&
          <Button
            color="success"
            className="position-absolute end-0 me-4"
            style={{ top: '10vh' }}
            onClick={() => window.location.href = '/admin-login'}
          >
            Admin
          </Button>}
      </div>
      <BrowserRouter>
        <Routes>
          {
            publicRoutes.map((route, idx) => (
              <Route
                key={idx}
                exact={true}
                path={route.path}
                element={
                  <Authmiddleware
                    isAuthProtected={false}
                    component={route.component}
                  />
                }
              />
            ))
          }
          {
            (authProtectedRoutes || []).map((route, idx) => (
              <Route
                key={idx}
                exact={true}
                path={route.path}
                element={
                  <Authmiddleware
                    isAuthProtected={true}
                    component={route.component}
                  />
                }
              />
            ))
          }
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
