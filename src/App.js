import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import AdminLteStudentForm from "./AdminLTELayout_student.js";
import AdminLteSchoolForm from "./AdminLTELayout_school.js";
import AdminLteSchoolFormEdit from "./AdminLTELayout_school_edit.js";
import AdminLteSchoolSuccessForm from "./AdminLTELayout_school_success.js";
import { useState, useContext } from "react";
import SchoolDetails from "./SchoolDetails.js";
import ContextProvider from "../src/Context/DataProvider.jsx";

import IdentityCard from "./template/Identitycard";
import Login_For_Icard from "./Login/Login_For_Icard";

import AddNewTeacher from "./Teacher/AddNewTeacher.js";
import ExcelBulkUpload from "./Teacher/ExcelUpload.js";
import Template5 from "./template/Template5.js";
import ClassTeacherDashBoard from "./ClassTeacher/ClassTeacherDashBoard.js";
import StudentExcelBulkUpload from "./ClassTeacher/StudentExcelUpload.js";
import AddNewStudent from "./ClassTeacher/AddNewStudent.js";
import Error from "./Error.jsx";
import AminLTELayoutSchoolHomePage from "./AminLTELayoutSchoolHomePage.js";
import Attendance from "./ClassTeacher/Attendance.js";

const App = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (data) => {
    setSubmittedData(data);
  };

  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login_For_Icard />} />

          <Route exact path="/school" element={<AdminLteSchoolForm />} />
          <Route
            path="school/schoolSuccess/"
            element={<AdminLteSchoolSuccessForm />}
          />
          <Route
            path="school/schoolSuccess/edit"
            element={<AdminLteSchoolFormEdit />}
          />

          <Route
            path="school/schoolname/:id"
            element={<AminLTELayoutSchoolHomePage />}
          />

          <Route path="/student" element={<AdminLteStudentForm />} />

          <Route path="/idcard" element={<IdentityCard />} />

          <Route path="/teacher" element={<AddNewTeacher />} />

          <Route path="/excel" element={<ExcelBulkUpload />} />

          <Route path="/studentexcel" element={<StudentExcelBulkUpload />} />

          <Route path="/addstudent" element={<AddNewStudent />} />

          <Route path="/classteacher" element={<ClassTeacherDashBoard />} />

          <Route path="/student-attendance" element={<Attendance />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
};

export default App;
