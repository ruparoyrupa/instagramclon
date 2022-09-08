import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import AuthContextProvider from './providers/AuthContextProvider';
import LoaderContextProvider from './providers/LoaderContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <AuthContextProvider>
      <LoaderContextProvider>
       <App />
      </LoaderContextProvider>
    </AuthContextProvider>
   </BrowserRouter>
  </React.StrictMode>
);



