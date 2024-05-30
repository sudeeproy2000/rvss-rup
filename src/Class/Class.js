import React, { useState } from "react";
import Logo from "../assets/images/rvssGroup_white.png";
import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/plugins/daterangepicker/daterangepicker.js";
import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/dist/js/adminlte.min.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../inputArrow.css";

function Class() {
  const navigate1 = useNavigate();
  const navigate2 = useNavigate();

  function goToTeacher() {
    navigate1("/teacher");
  }

  function goToClass() {
    navigate2("/class");
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
                    <li class="nav-item" onClick={goToTeacher}>
                      <a href="" class="nav-link">
                        <i class="nav-icon fas fa-ellipsis-h"></i>
                        <p>Teacher</p>
                      </a>
                    </li>
                    <li class="nav-item" onClick={goToClass}>
                      <a href="" class="nav-link">
                        <i class="nav-icon fas fa-file"></i>
                        <p>Class</p>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </aside>
        </div>
      </body>

      <form className="p-10 bg-blue-300">
        <div className="border-2 p-5">
          <h2 className="text-5xl font-semibold leading-7 text-white p-5 bg-indigo-500">
            Enter Class Data
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-xl font-medium leading-6 text-gray-900 p-3"
              >
                Class Teacher ID
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="classteacherid"
                  id="class-teacher-id"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6 p-3"
                  value={inputData.classteacherid}
                  onChange={handelData}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-xl font-medium leading-6 text-gray-900 p-3"
              >
                Class Teacher Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="classteachername"
                  id="class-teacher-name"
                  autoComplete="family-name"
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                  value={inputData.classteachername}
                  onChange={handelData}
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1 mt-5">
              <label
                htmlFor="floor"
                className="p-3 block text-xl font-medium leading-6 text-gray-900"
              >
                Floor
              </label>
              <div className="mt-2">
                <select
                  id="floor"
                  name="floor"
                  autoComplete="floor"
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-xl sm:leading-6"
                  value={inputData.floor}
                  onChange={handelData}
                >
                  <option value="">1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>
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
          <fieldset className="flex flex-row mt-5">
            <legend className="text-4xl font-semibold leading-7 text-white p-5 bg-indigo-500 mt-3">
              Choose Subjects
            </legend>
            <div className="space-y-6 sm:col-span-3">
              <div className="relative flex gap-x-3 ">
                <div className="flex h-6 items-center">
                  <input
                    id="hindi"
                    name="hindi"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="hindi"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Hindi
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="english"
                    name="english"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="english"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    English
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="bengali"
                    name="bengali"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="bengali"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Bengali
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="mathematics"
                    name="mathematics"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="mathematics"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Mathematics
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="science"
                    name="science"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="science"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Science
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="socialscience"
                    name="socialscience"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="socialscience"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Social Science
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="carnaticmusicvocal"
                    name="carnaticmusicvocal"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="carnaticmusicvocal"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Carnatic Music (Vocal)
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="carnaticmusicmelodicinstruments"
                    name="carnaticmusicmelodicinstruments"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="carnaticmusicmelodicinstruments"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Carnatic Music (Melodic Instruments)
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="carnaticmusicpercussioninstruments"
                    name="carnaticmusicpercussioninstruments"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="carnaticmusicpercussioninstruments"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Carnatic Music (Percussion Instruments)
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="hindustanimusicvocal"
                    name="hindustanimusicvocal"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="hindustanimusicvocal"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Hindustani Music (Vocal)
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="hindustanimusicmelodicinstruments"
                    name="hindustanimusicmelodicinstruments"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="hindustanimusicmelodicinstruments"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Hindustani Music (Melodic Instruments)
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="hindustanimusicpercussioninstruments"
                    name="hindustanimusicpercussioninstruments"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="hindustanimusicpercussioninstruments"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Hindustani Music (Percussion Instruments)
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="paintinghomescience "
                    name="paintinghomescience"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="paintinghomescience"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Painting Home Science
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="ncc"
                    name="ncc"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="ncc"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    National Cadet Corps (NCC)
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="computerapplications "
                    name="computerapplications"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="computerapplications"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Computer Applications
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="elementsofbusiness "
                    name="elementsofbusiness"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="elementsofbusiness"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Elements of Business
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="elementsofbookkeepingandaccountancy"
                    name="elementsofbookkeepingandaccountancy"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="science"
                    className="elementsofbookkeepingandaccountancy text-gray-900 text-3xl"
                  >
                    Elements of Book Keeping and Accountancy
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="arteducation"
                    name="arteducation"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="arteducation"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Art Education
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:col-span-3">
              <div className="relative flex gap-x-3 ">
                <div className="flex h-6 items-center">
                  <input
                    id="accountancy"
                    name="accountancy"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="accountancy"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Accountancy
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3 ">
                <div className="flex h-6 items-center">
                  <input
                    id="biology"
                    name="biology"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="biology"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Biology
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3 ">
                <div className="flex h-6 items-center">
                  <input
                    id="biotechnology"
                    name="biotechnology"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="biotechnology"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Bio Technology
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3 ">
                <div className="flex h-6 items-center">
                  <input
                    id="businessstudies"
                    name="businessstudies"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="businessstudies"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Business Studies
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3 ">
                <div className="flex h-6 items-center">
                  <input
                    id="carnaticmelodic"
                    name="carnaticmelodic"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="carnaticmelodic"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Carnatic Melodic
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3 ">
                <div className="flex h-6 items-center">
                  <input
                    id="carnaticvocal"
                    name="carnaticvocal"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="carnaticvocal"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Carnatic Vocal
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3 ">
                <div className="flex h-6 items-center">
                  <input
                    id="carnaticpercussion"
                    name="carnaticpercussion"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="carnaticpercussion"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Carnatic Percussion
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3 ">
                <div className="flex h-6 items-center">
                  <input
                    id="chemistry"
                    name="chemistry"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="chemistry"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Chemistry
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3 ">
                <div className="flex h-6 items-center">
                  <input
                    id="computerscienceoldXII"
                    name="computerscienceoldXII"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="computerscienceoldXII"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Computer Science OLD XII
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3 ">
                <div className="flex h-6 items-center">
                  <input
                    id="computersciencenewXI"
                    name="computersciencenewXI"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="computersciencenewXI"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Computer Science New XI
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3 ">
                <div className="flex h-6 items-center">
                  <input
                    id="computersciencenewXII"
                    name="computersciencenewXII"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="computersciencenewXII"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Computer Science New XII
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3 ">
                <div className="flex h-6 items-center">
                  <input
                    id="dance"
                    name="dance"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="dance"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Dance
                  </label>
                </div>
              </div>

              <div className="relative flex gap-x-3 ">
                <div className="flex h-6 items-center">
                  <input
                    id="economics"
                    name="economics"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="economics"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Economics
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3 ">
                <div className="flex h-6 items-center">
                  <input
                    id="engineeringgraphics"
                    name="engineeringgraphics"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="engineeringgraphics"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Engineering Graphics
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3 ">
                <div className="flex h-6 items-center">
                  <input
                    id="entrepreneurship"
                    name="entrepreneurship"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="entrepreneurship"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Entrepreneurship
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3 ">
                <div className="flex h-6 items-center">
                  <input
                    id="pgsaa"
                    name="pgsaa"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="pgsaa"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Painting, Graphics, Sculpture, Applied-Commercial Art
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3 ">
                <div className="flex h-6 items-center">
                  <input
                    id="geography"
                    name="geography"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="geography"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Geography
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3 ">
                <div className="flex h-6 items-center">
                  <input
                    id="hindustanimelodic"
                    name="hindustanimelodic"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="hindustanimelodic"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Hindustani Melodic
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3 ">
                <div className="flex h-6 items-center">
                  <input
                    id="hindustanipercussion"
                    name="hindustanipercussion"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="hindustanipercussion"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Hindustani Percussion
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3 ">
                <div className="flex h-6 items-center">
                  <input
                    id="hindustanivocalHistory"
                    name="hindustanivocalHistory"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="hindustanivocalHistory"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Hindustani VocalHistory
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3 ">
                <div className="flex h-6 items-center">
                  <input
                    id="homestudies"
                    name="homestudies"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="homestudies"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Home Science | Pointers for reference for Class-XI
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3 ">
                <div className="flex h-6 items-center">
                  <input
                    id="infoPracticesnewXI"
                    name="infoPracticesnewXI"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="infoPracticesnewXI"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    InfoPractices New XI
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3 ">
                <div className="flex h-6 items-center">
                  <input
                    id="infoPracticesnewXII"
                    name="infoPracticesnewXII"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="infoPracticesnewXII"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    InfoPractices New XII
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3 ">
                <div className="flex h-6 items-center">
                  <input
                    id="infoPracticesoldXII"
                    name="infoPracticesoldXII"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="infoPracticesoldXII"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    InfoPractices Old XII
                  </label>
                </div>
              </div>

              <div className="relative flex gap-x-3 ">
                <div className="flex h-6 items-center">
                  <input
                    id="knowledgetraditionpracticesindia"
                    name="knowledgetraditionpracticesindia"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="knowledgetraditionpracticesindia"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Knowledge Tradition - Practices India
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3 ">
                <div className="flex h-6 items-center">
                  <input
                    id="legalstudies"
                    name="legalstudies"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="legalstudies"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Legal Studies
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3 ">
                <div className="flex h-6 items-center">
                  <input
                    id="physicaleducation"
                    name="physicaleducation"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="physicaleducation"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Physical Education
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3 ">
                <div className="flex h-6 items-center">
                  <input
                    id="physics"
                    name="physics"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="physics"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Physics
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3 ">
                <div className="flex h-6 items-center">
                  <input
                    id="politicalscience"
                    name="politicalscience"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="politicalscience"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Political Science
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3 ">
                <div className="flex h-6 items-center">
                  <input
                    id="psychology"
                    name="psychology"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="psychology"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Psychology
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3 ">
                <div className="flex h-6 items-center">
                  <input
                    id="sociology"
                    name="sociology"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="sociology"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    Sociology
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3 ">
                <div className="flex h-6 items-center">
                  <input
                    id="generalstudies"
                    name="generalstudies"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="generalstudies"
                    className="font-medium text-gray-900 text-3xl"
                  >
                    General Studies
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
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

export default Class;
