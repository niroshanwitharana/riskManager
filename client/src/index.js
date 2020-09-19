import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthProvider from './Context/AuthContext';
import UserProvider from './Context/UserContext';
import ProjectProvider from "./Context/ProjectContext";

{/* Wrap AuthProvider round restricted routes so they don't render if user isn't logged in */}
ReactDOM.render(
  <React.StrictMode>
  <AuthProvider>
    <UserProvider>
    <ProjectProvider>
    <App />
    </ProjectProvider>
    </UserProvider>
  </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

