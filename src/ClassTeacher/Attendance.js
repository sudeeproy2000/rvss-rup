import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css"; // Import styles
import DatePicker from "react-datepicker"; // Import datepicker
import "./attendance.css";
import Logo from "../assets/images/rvssGroup_white.png";
import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/plugins/daterangepicker/daterangepicker.js";
import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/dist/js/adminlte.min.js";
import { useNavigate } from "react-router-dom";

const Attendance = () => {
  // Sample data for demonstration
  const data = [
    { id: 1, studentID: 1, name: "John Doe" },
    { id: 2, studentID: 2, name: "Jane Smith" },
    { id: 3, studentID: 3, name: "Michael Johnson" },
    // Add more data as needed
  ];

  //side panel navigation

  const navigate = useNavigate();
  const navigate1 = useNavigate();
  const navigate2 = useNavigate();

  function goToClassTeacherHome() {
    navigate("/classteacher");
  }

  function goToAddNewStudent() {
    navigate1("/addstudent");
  }

  function goToAttendance() {
    navigate2("/student-attendance");
  }

  // State to store attendance data and selected date
  const [attendanceData, setAttendanceData] = useState({
    date: new Date(),
    attendance: {},
  });

  // Function to handle radio button change
  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setAttendanceData((prevState) => ({
      ...prevState,
      attendance: {
        ...prevState.attendance,
        [name]: value,
      },
    }));
  };

  // Function to handle date change
  const handleDateChange = (date) => {
    setAttendanceData((prevState) => ({
      ...prevState,
      date: date,
    }));
  };

  // Function to handle submit button click
  const handleSubmit = () => {
    console.log("Attendance Data:", attendanceData);
    alert("Attendance submitted successfully!");
  };

  return (
    <>
      <body class="hold-transition sidebar-mini">
        <div class="wrapper">
          <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-widget="pushmenu"
                  href="#"
                  role="button"
                >
                  <i class="fas fa-bars"></i>
                </a>
              </li>
              <li class="nav-item d-none d-sm-inline-block">
                <a href="../../index3.html" class="nav-link">
                  Home
                </a>
              </li>
              <li class="nav-item d-none d-sm-inline-block">
                <a href="#" class="nav-link">
                  Contact
                </a>
              </li>
            </ul>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-widget="fullscreen"
                  href="#"
                  role="button"
                >
                  <i class="fas fa-expand-arrows-alt"></i>
                </a>
              </li>
            </ul>
          </nav>
          <aside className="main-sidebar sidebar-dark-primary elevation-4 h-full">
            <a href="http://rvssgroup.com/" class="brand-link">
              <img
                src={Logo}
                class="img-responsive"
                style={{ alignSelf: "left", marginRight: "120px" }}
              />
            </a>
            <div class="sidebar">
              <div class="form-inline">
                <nav class="mt-2">
                  <ul
                    class="nav nav-pills nav-sidebar flex-column"
                    data-widget="treeview"
                    role="menu"
                    data-accordion="false"
                  >
                    <li class="nav-item" onClick={goToClassTeacherHome}>
                      <a href="" class="nav-link">
                        <i class="nav-icon fas fa-ellipsis-h"></i>
                        <p>Students</p>
                      </a>
                    </li>
                    <li class="nav-item" onClick={goToAddNewStudent}>
                      <a href="" class="nav-link">
                        <i class="nav-icon fas fa-file"></i>
                        <p>Add New Student</p>
                      </a>
                    </li>
                    <li class="nav-item" onClick={goToAttendance}>
                      <a href="" class="nav-link">
                        <i class="nav-icon fas fa-ellipsis-h"></i>
                        <p>Attendance</p>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </aside>
        </div>
      </body>

      <div className="h-screen bg-blue-400 flex flex-col justify-center items-center ">
        <div className="bg-white p-5 w-full h-full lg:w-5/6 xl:w-5/6 flex flex-col justify-center items-center">
          <div className="flex justify-around items-center">
            <h4>Select Date</h4>
            <DatePicker
              className="w-full h-full bg-slate-200 border-1 p-2"
              selected={attendanceData.date}
              onChange={handleDateChange}
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          {/* Dynamic table */}
          <table className="mt-5">
            <thead>
              <tr>
                <th>Name</th>
                <th>Present</th>
                <th>Absent</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <input
                      type="radio"
                      name={`attendance_${item.id}`}
                      value="present"
                      onChange={handleRadioChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name={`attendance_${item.id}`}
                      value="absent"
                      onChange={handleRadioChange}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="border-2 text-4xl bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-24 rounded-full"
            onClick={handleSubmit}
          >
            Submit Attendance
          </button>
        </div>
      </div>
    </>
  );
};

export default Attendance;
