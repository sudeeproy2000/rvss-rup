import React from "react";
import BulkUpload from "./StudentBulkUpload";
import Logo from "../assets/images/rvssGroup_white.png";
import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/plugins/daterangepicker/daterangepicker.js";
import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/dist/js/adminlte.min.js";
import { useNavigate } from "react-router-dom";

function AddNewStudent() {
  const navigate = useNavigate();
  const navigate1 = useNavigate();

  function goToClassTeacherHome() {
    navigate("/classteacher");
  }

  function goToAddNewStudent() {
    navigate1("/addstudent");
  }

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
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6 p-3"
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
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
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
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
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
                  type="employee"
                  name="employee"
                  id="employee"
                  autoComplete="address-level2"
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
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
                  id="class-teacher"
                  name="class-teacher"
                  autoComplete="class-teacher"
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xl sm:leading-6"
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
                />
              </div>
            </div>
          </div>
        </div>

        <div id="button" className="flex justify-end space-x-6 mt-6 gap-8 ">
          <button className="border-2 text-4xl bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-24 rounded-full">
            Cancel
          </button>

          <button className="border-2 text-4xl bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-24 rounded-full">
            Save
          </button>
        </div>
      </form>
    </>
  );
}

export default AddNewStudent;
