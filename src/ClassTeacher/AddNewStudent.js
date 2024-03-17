import React, { useState } from "react";
import BulkUpload from "./StudentBulkUpload";
import Logo from "../assets/images/rvssGroup_white.png";
import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/plugins/daterangepicker/daterangepicker.js";
import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/dist/js/adminlte.min.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddNewStudent() {
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

  const data = {
    firstname: "",
    lastname: "",
    fname: "",
    dob: "",
    email: "",
    phone: "",
    schoolid: "",
    studentid: "",
    roll: "",
  };

  const [inputData, setInputData] = useState(data);

  const handelData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", inputData) //PASTE THE POST LINK HERE
      .then((response) => {
        console.log(response);
      });
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
          <aside class="main-sidebar sidebar-dark-primary elevation-4">
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

      <div className="mr-5 bg-blue-400">
        <BulkUpload />
      </div>

      <form className="p-10 bg-blue-400">
        <div className="border-2 p-5">
          <h2 className="text-5xl font-semibold leading-7 text-white p-5 bg-indigo-500">
            Add Student Manually
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-xl font-medium leading-6 text-gray-900 p-3"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstname"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6 p-3"
                  value={inputData.firstname}
                  onChange={handelData}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-xl font-medium leading-6 text-gray-900 p-3"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastname"
                  id="last-name"
                  autoComplete="family-name"
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                  value={inputData.lastname}
                  onChange={handelData}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="p-3 block text-xl font-medium leading-6 text-gray-900"
              >
                Father's Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="fname"
                  id="first-name"
                  autoComplete="given-name"
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                  value={inputData.fname}
                  onChange={handelData}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="p-3 block text-xl font-medium leading-6 text-gray-900"
              >
                Student DOB (Date of Birth)
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  autoComplete="dob"
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                  value={inputData.dob}
                  onChange={handelData}
                />
              </div>
            </div>

            <div className="sm:col-span-4 mt-5">
              <label
                htmlFor="email"
                className="block text-xl font-medium leading-6 text-gray-900 p-3"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                  value={inputData.email}
                  onChange={handelData}
                />
              </div>
            </div>

            <div className="sm:col-span-4 mt-5">
              <label
                htmlFor="phone"
                className="block text-xl font-medium leading-6 text-gray-900 p-3"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="number"
                  autoComplete="number"
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                  value={inputData.phone}
                  onChange={handelData}
                />
              </div>
            </div>

            <div className="sm:col-span-4 mt-5">
              <label
                htmlFor="schoolid"
                className="block text-xl font-medium leading-6 text-gray-900 p-3"
              >
                School ID
              </label>
              <div className="mt-2">
                <input
                  id="schoolid"
                  name="schoolid"
                  type=""
                  autoComplete="number"
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                  value={inputData.schoolid}
                  onChange={handelData}
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1 mt-5">
              <label
                htmlFor="employee"
                className="p-3 block text-xl font-medium leading-6 text-gray-900"
              >
                Student Id UID
              </label>
              <div className="mt-2">
                <input
                  type=""
                  name="studentid"
                  id="studentid"
                  autoComplete="address-level2"
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                  value={inputData.studentid}
                  onChange={handelData}
                />
              </div>
            </div>

            <div className="sm:col-span-2 mt-5">
              <label
                htmlFor="class-teacher"
                className="p-3 block text-xl font-medium leading-6 text-gray-900"
              >
                Class
              </label>
              <div className="mt-2">
                <select
                  id="class"
                  name="class"
                  autoComplete="class"
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xl sm:leading-6"
                  value={inputData.class}
                  onChange={handelData}
                >
                  <option value="">1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2 mt-5">
              <label
                htmlFor="class-teacher"
                className="p-3 block text-xl font-medium leading-6 text-gray-900"
              >
                Section
              </label>
              <div className="mt-2">
                <select
                  id="class-teacher"
                  name="class-teacher"
                  autoComplete="class-teacher"
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xl sm:leading-6"
                >
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4 mt-5">
              <label
                htmlFor="address"
                className="block text-xl font-medium leading-6 text-gray-900 p-3"
              >
                Address
              </label>
              <div className="mt-2">
                <input
                  id="address"
                  name="address"
                  type="text"
                  autoComplete="address"
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 mt-5">
              <label
                htmlFor="roll"
                className="block text-xl font-medium leading-6 text-gray-900 p-3"
              >
                Roll No
              </label>
              <div className="mt-2">
                <input
                  id="roll"
                  min="0"
                  max="99"
                  name="roll"
                  type="number"
                  autoComplete="roll"
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                  value={inputData.roll}
                  onChange={handelData}
                />
              </div>
            </div>
          </div>
        </div>

        <div id="button" className="flex justify-end space-x-6 mt-6 gap-8 ">
          <button className="border-2 text-4xl bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-24 rounded-full">
            Cancel
          </button>

          <button
            className="border-2 text-4xl bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-24 rounded-full"
            onClick={handelSubmit}
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}

export default AddNewStudent;
