import React, { useState, useContext, useEffect } from "react";
import Logo from "./assets/images/rvssGroup_white.png";
import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/plugins/daterangepicker/daterangepicker.js";
import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/dist/js/adminlte.min.js";

import { useNavigate } from "react-router-dom";

function AminLTELayoutSchoolHomePage() {
  const navigate1 = useNavigate();
  const navigate2 = useNavigate();

  function goToTeacher() {
    navigate1("/teacher");
  }

  function goToClass() {
    navigate2("/class");
  }

  //const { schoolData } = useContext(IcardContext);
  const schoolData = JSON.parse(localStorage.getItem("school"));

  // const { isUserLoggedIn } = useContext(IcardContext);

  const navigate = useNavigate();
  const idcardtemplate = schoolData.icard_template;

  //  console.log(idcardtemplate);
  console.log(schoolData);
  //  console.log(icardlogo);

  const date = new Date(schoolData.school_registration_date).toISOString();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <body class="hold-transition sidebar-mini">
      <div class="wrapper">
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" data-widget="pushmenu" href="#" role="button">
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
                  <li class="nav-item" onClick={goToTeacher}>
                    <a href="" class="nav-link">
                      <i class="nav-icon fas fa-file"></i>
                      <p>Teachers</p>
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
        <div class="content-wrapper">
          <>
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">School Details</h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group" color="#GEGEGE">
                  <label htmlFor="inputName">
                    School Id is: {schoolData.school_id}{" "}
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="inputName">
                    School Name is: {schoolData.school_name}{" "}
                  </label>

                  <script>//alert("school name");</script>
                </div>
                <div className="form-group">
                  <label htmlFor="inputName">
                    Date of Registration: {date.split("T")[0]}
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="inputName">
                    School Address: {schoolData.school_address}{" "}
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="inputName">
                    School City: {schoolData.school_city}{" "}
                  </label>
                </div>
                <div class="form-group">
                  <label>State {schoolData.school_state} </label>
                </div>
                <div className="form-group">
                  <label htmlFor="inputName">
                    Pincode: {schoolData.school_pincode}{" "}
                  </label>
                </div>
                <div class="row">
                  <div class="col-12 col-sm-6">
                    <div className="form-group">
                      <label htmlFor="inputName">
                        School Phone Number 1: {schoolData.phones.mobile_number}
                      </label>
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fas fa-phone"></i>
                        </span>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputName">
                        School Phone Number 2: {schoolData.phones.fax}{" "}
                      </label>
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fas fa-phone"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="inputEmail">
                    School Admin Email: {schoolData.school_adminEmail}{" "}
                  </label>
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <div class="card card-primary">
                  <div class="card-header">
                    <h3 class="card-title">Principal Details </h3>
                  </div>
                  <div class="form-group">
                    <label>
                      Salutation: {schoolData.principal.salutation}{" "}
                    </label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputName">
                      Principal Name: {schoolData.principal.name}{" "}
                    </label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputName">
                      Principal Mobile Number:{" "}
                      {schoolData.principal.phones.mobile_number}{" "}
                    </label>

                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="fas fa-phone"></i>
                      </span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputEmail">
                      Principal Email: {schoolData.principal.email}{" "}
                    </label>
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="fas fa-envelope"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </>
        </div>
        <div>
          <button
            className="flex justify-end space-x-6 mt-6 gap-8 border-2 text-4xl bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-24 rounded-full"
            onClick={goToTeacher}
          >
            Teacher
          </button>
        </div>
      </div>
    </body>
  );
}

export default AminLTELayoutSchoolHomePage;
