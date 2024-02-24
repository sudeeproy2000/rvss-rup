import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AdminLteStudentForm from './AdminLTELayout_student.js';
import AdminLteSchoolForm from './AdminLTELayout_school.js';
import AdminLteSchoolFormEdit from './AdminLTELayout_school_edit.js';
import AdminLteSchoolSuccessForm from './AdminLTELayout_school_success.js'
import { useState,useContext } from 'react';
import SchoolDetails from './SchoolDetails.js';
import ContextProvider from '../src/Context/DataProvider.jsx';

 import IdentityCard from './template/Identitycard';
 import Login_For_Icard from './Login/Login_For_Icard';
const App = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (data) => {
    setSubmittedData(data);
  };
  
  return (
    <ContextProvider>
    <Router>
      <Routes>
      <Route path="/" element={<Login_For_Icard  />} />
 
        <Route exact path="/school" element={<AdminLteSchoolForm />}  />
        <Route path="school/schoolSuccess" element={<AdminLteSchoolSuccessForm />} />
        <Route path="school/schoolSuccess/edit" element={<AdminLteSchoolFormEdit />} />

        <Route path="/student" element={<AdminLteStudentForm />} />
        
        <Route path="/idcard" element={<IdentityCard />} />
        
        
       

      </Routes>
    </Router>
    </ContextProvider>
    
  );
}
 
export default App;
