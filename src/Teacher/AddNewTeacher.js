import React, { useState, useContext } from "react";
import BulkUpload from "./TeacherBulkUpload";
import Logo from "../assets/images/rvssGroup_white.png";
import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/plugins/daterangepicker/daterangepicker.js";
import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/dist/js/adminlte.min.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddNewTeacher() {
  const data = {
    firstname: "",
    lastname: "",
    employee: "",

    email: "",
    phone: "",
    pgttgt: "",

    teacher: "",
  };

  const schoolData = JSON.parse(localStorage.getItem("school"));
  //console.log(schoolData);

  const [inputData, setInputData] = useState(data);

  const handelData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    alert("hi");
    let obj = { schoolId: schoolData.school_id };
    setInputData({ ...inputData, obj });
    console.log(inputData);
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
                  data-widget="navbar-search"
                  href="#"
                  role="button"
                >
                  <i class="fas fa-search"></i>
                </a>
                <div class="navbar-search-block">
                  <form class="form-inline">
                    <div class="input-group input-group-sm">
                      <input
                        class="form-control form-control-navbar"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      ></input>
                      <div class="input-group-append">
                        <button class="btn btn-navbar" type="submit">
                          <i class="fas fa-search"></i>
                        </button>
                        <button
                          class="btn btn-navbar"
                          type="button"
                          data-widget="navbar-search"
                        >
                          <i class="fas fa-times"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" data-toggle="dropdown" href="#">
                  <i class="far fa-comments"></i>
                  <span class="badge badge-danger navbar-badge">3</span>
                </a>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                  <a href="#" class="dropdown-item">
                    <div class="media">
                      <img
                        src="../../dist/img/user1-128x128.jpg"
                        alt="User Avatar"
                        class="img-size-50 mr-3 img-circle"
                      ></img>
                      <div class="media-body">
                        <h3 class="dropdown-item-title">
                          Brad Diesel
                          <span class="float-right text-sm text-danger">
                            <i class="fas fa-star"></i>
                          </span>
                        </h3>
                        <p class="text-sm">Call me whenever you can...</p>
                        <p class="text-sm text-muted">
                          <i class="far fa-clock mr-1"></i> 4 Hours Ago
                        </p>
                      </div>
                    </div>
                  </a>
                  <div class="dropdown-divider"></div>
                  <a href="#" class="dropdown-item">
                    <div class="media">
                      <img
                        src="../../dist/img/user8-128x128.jpg"
                        alt="User Avatar"
                        class="img-size-50 img-circle mr-3"
                      ></img>
                      <div class="media-body">
                        <h3 class="dropdown-item-title">
                          John Pierce
                          <span class="float-right text-sm text-muted">
                            <i class="fas fa-star"></i>
                          </span>
                        </h3>
                        <p class="text-sm">I got your message bro</p>
                        <p class="text-sm text-muted">
                          <i class="far fa-clock mr-1"></i> 4 Hours Ago
                        </p>
                      </div>
                    </div>
                  </a>
                  <div class="dropdown-divider"></div>
                  <a href="#" class="dropdown-item">
                    <div class="media">
                      <img
                        src="../../dist/img/user3-128x128.jpg"
                        alt="User Avatar"
                        class="img-size-50 img-circle mr-3"
                      ></img>
                      <div class="media-body">
                        <h3 class="dropdown-item-title">
                          Nora Silvester
                          <span class="float-right text-sm text-warning">
                            <i class="fas fa-star"></i>
                          </span>
                        </h3>
                        <p class="text-sm">The subject goes here</p>
                        <p class="text-sm text-muted">
                          <i class="far fa-clock mr-1"></i> 4 Hours Ago
                        </p>
                      </div>
                    </div>
                  </a>
                  <div class="dropdown-divider"></div>
                  <a href="#" class="dropdown-item dropdown-footer">
                    See All Messages
                  </a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" data-toggle="dropdown" href="#">
                  <i class="far fa-bell"></i>
                  <span class="badge badge-warning navbar-badge">15</span>
                </a>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                  <span class="dropdown-item dropdown-header">
                    15 Notifications
                  </span>
                  <div class="dropdown-divider"></div>
                  <a href="#" class="dropdown-item">
                    <i class="fas fa-envelope mr-2"></i> 4 new messages
                    <span class="float-right text-muted text-sm">3 mins</span>
                  </a>
                  <div class="dropdown-divider"></div>
                  <a href="#" class="dropdown-item">
                    <i class="fas fa-users mr-2"></i> 8 friend requests
                    <span class="float-right text-muted text-sm">12 hours</span>
                  </a>
                  <div class="dropdown-divider"></div>
                  <a href="#" class="dropdown-item">
                    <i class="fas fa-file mr-2"></i> 3 new reports
                    <span class="float-right text-muted text-sm">2 days</span>
                  </a>
                  <div class="dropdown-divider"></div>
                  <a href="#" class="dropdown-item dropdown-footer">
                    See All Notifications
                  </a>
                </div>
              </li>
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
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-widget="control-sidebar"
                  data-slide="true"
                  href="#"
                  role="button"
                >
                  <i class="fas fa-th-large"></i>
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
                    <li class="nav-item">
                      <a href="../../iframe.html" class="nav-link">
                        <i class="nav-icon fas fa-ellipsis-h"></i>
                        <p>School</p>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="" class="nav-link">
                        <i class="nav-icon fas fa-file"></i>
                        <p>Teachers</p>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </aside>
        </div>
      </body>

      <div className="mr-5">
        <BulkUpload />
      </div>

      <form className="p-10">
        <div className="border-2 p-5">
          <h2 className="text-4xl font-semibold leading-7 text-white p-5 bg-indigo-500">
            Add Teacher Manually
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

            <div className="sm:col-span-4">
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

            <div className="sm:col-span-4">
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

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="employee"
                className="block text-xl font-medium leading-6 text-gray-900 p-3"
              >
                Employee Id
              </label>
              <div className="mt-2">
                <input
                  type="employee"
                  name="employee"
                  id="employee"
                  autoComplete="address-level2"
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                  value={inputData.employee}
                  onChange={handelData}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="class-teacher"
                className="block text-xl font-medium leading-6 text-gray-900 p-3"
              >
                PGT/TGT
              </label>
              <div className="mt-2">
                <select
                  id="class-teacher"
                  name="pgttgt"
                  autoComplete="class-teacher"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xl sm:leading-6 text-xl p-3"
                  value={inputData.pgttgt}
                  onChange={handelData}
                >
                  <option>PGT</option>
                  <option>TGT</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="class-teacher"
                className="block text-xl font-medium leading-6 text-gray-900 p-3"
              >
                Designation
              </label>
              <div className="mt-2">
                <select
                  id="class-teacher"
                  name="teacher"
                  autoComplete="class-teacher"
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xl sm:leading-6 text-xl"
                  value={inputData.teacher}
                  onChange={handelData}
                >
                  <option>Head Master</option>
                  <option>Assistant Teacher</option>
                </select>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12 mt-8">
            <fieldset>
              <legend className="text-4xl font-semibold leading-6 text-white bg-indigo-500 p-4 flex justify-center items-center">
                Class Teacher
              </legend>
              <p className="text-xl leading-6 text-gray-600 p-3 mt-5 font-semibold">
                Select the teacher is class teacher or not
              </p>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="class-teacher-yes"
                    name="class-teacher-yes"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 p-3 text-xl"
                  />
                  <label
                    htmlFor="class-teacher-validation"
                    className="block font-medium leading-6 text-gray-900 p-3 text-xl"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="class-teacher-no"
                    name="classteacher"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 p-3 text-xl"
                  />
                  <label
                    htmlFor="push-email"
                    className="block font-medium leading-6 text-gray-900 p-3 text-xl"
                  >
                    No
                  </label>
                </div>
              </div>
            </fieldset>
          </div>

          <div className="border-b border-gray-900/10 pb-12 mt-6">
            <h2 className="font-semibold leading-7 text-gray-900 p-3 text-xl">
              Only select this option{" "}
              <span className="text-red-800">
                {" "}
                if the Tracher is class teacher?
              </span>
            </h2>
            <div className="sm:col-span-2">
              <label
                htmlFor="class"
                className="block font-medium leading-6 text-gray-900 p-3 text-xl"
              >
                Class
              </label>
              <div className="mt-2">
                <select
                  id="class"
                  name="class"
                  autoComplete="class"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xl sm:leading-6 p-3 text-xl"
                >
                  <option>1</option>
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
            <div className="sm:col-span-2">
              <label
                htmlFor="section"
                className="block text-sm font-medium leading-6 text-gray-900 p-3 text-xl"
              >
                Section
              </label>
              <div className="mt-2">
                <select
                  id="section"
                  name="section"
                  autoComplete="section"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xl sm:leading-6 p-3 text-xl"
                >
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                </select>
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

export default AddNewTeacher;
