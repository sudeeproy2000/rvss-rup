import React, { useState, useContext, useEffect } from "react";
import Logo from "./assets/images/rvssGroup_white.png";
import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/plugins/daterangepicker/daterangepicker.js";
import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/dist/js/adminlte.min.js";

import { useNavigate } from "react-router-dom";
import { IcardContext } from "./Context/DataProvider.jsx";

const AdminLteSchoolSuccessForm = (props) => {
  const navigate1 = useNavigate();
  const navigate2 = useNavigate();

  function goToTeacher() {
    navigate1("/teacher");
  }

  const { schoolData } = useContext(IcardContext);
  const { icardlogo } = useContext(IcardContext);

  const { isUserLoggedIn } = useContext(IcardContext);

  const navigate = useNavigate();
  const idcardtemplate = schoolData.icard_template;

  //  console.log(idcardtemplate);
  console.log(schoolData);
  //  console.log(icardlogo);

  const imgurl = schoolData.schoolFiles.image1_location;
  console.log(imgurl);
  const date = new Date(schoolData.school_registration_date).toISOString();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [base64Image, setBase64Image] = useState("");

  // ...

  // Function to convert image to Base64
  const getImageBase64 = async (url) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      throw error;
    }
  };

  // Use the function to get Base64-encoded image
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const base64Image = await getImageBase64(imgurl);
        setBase64Image(base64Image);
      } catch (error) {
        console.error("Error fetching image:", error);
        // Handle error, e.g., set a default image
        setBase64Image(
          "https://cdn.pixabay.com/photo/2014/04/02/10/35/book-303927_960_720.png"
        );
      }
    };

    fetchImage();
  }, [imgurl]);

  function onSuccess() {
    navigate2(`/school/schoolname/${schoolData.school_id}`);
  }

  // Rest of your existing code...

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
                </ul>
              </nav>
            </div>
          </div>
        </aside>
        <div class="content-wrapper">
          <div className="card">
            <section class="content-header">
              <div class="container-fluid">
                <div class="row mb-2">
                  <div class="col-sm-6">
                    <h1>School Registration Success </h1>
                  </div>
                  <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                      <li class="breadcrumb-item">
                        <a href="javascript:appStudent()">Home</a>
                      </li>
                      <li class="breadcrumb-item">
                        <a href="appStudent"></a>Student Form
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
            <section class="content">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-6">
                    <div className="card-body">
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
                                    School Phone Number 1:{" "}
                                    {schoolData.phones.mobile_number}
                                  </label>
                                  <div class="input-group-prepend">
                                    <span class="input-group-text">
                                      <i class="fas fa-phone"></i>
                                    </span>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <label htmlFor="inputName">
                                    School Phone Number 2:{" "}
                                    {schoolData.phones.fax}{" "}
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
                                School Admin Email:{" "}
                                {schoolData.school_adminEmail}{" "}
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

                            <button
                              type="button"
                              class="btn btn-block btn-success btn-sm"
                              //onClick={goToTeacher}
                              onClick={onSuccess}
                            >
                              Submit
                            </button>
                            <div>
                              {isUserLoggedIn ? (
                                // Show the "Edit" button when the user is logged in
                                <button
                                  type="button"
                                  className="btn btn-block btn-success btn-sm"
                                  onClick={() =>
                                    navigate(`/school/schoolSuccess/edit`)
                                  }
                                >
                                  Edit
                                </button>
                              ) : (
                                // Show the "Back" button when the user is not logged in
                                <>
                                  <button
                                    type="button"
                                    className="btn btn-block btn-info btn-sm"
                                    style={{ backgroundColor: "#3498db" }}
                                    onClick={() => navigate(`/school`)}
                                  >
                                    Back
                                  </button>
                                </>
                              )}
                            </div>
                          </form>
                        </div>
                      </>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="card card-primary">
                      <div class="card-header">
                        <h3 class="card-title">I Card Template Preview</h3>
                      </div>
                      <div class="form-group">
                        <label htmlFor="inputName">
                          I Card Template For School
                        </label>
                        <div
                          style={{
                            backgroundColor: "white",
                            border: "2px solid black",
                            height: "319px",
                            width: "507.5px",
                          }}
                        >
                          <div
                            id="header"
                            style={{
                              display: "flex",
                              backgroundColor: "rgb(69 10 10)",
                              height: "85px",
                            }}
                          >
                            <div
                              style={{
                                width: "20%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "0.75rem ",
                              }}
                            >
                              <img src="./assets/images/kvlogo.png" alt="" />
                            </div>
                            <div
                              style={{
                                width: "80%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <h1
                                style={{
                                  fontSize: "18px",
                                  color: "white",
                                  textTransform: "capitalize",
                                  fontWeight: "bold",
                                }}
                              >
                                {schoolData.school_name}{" "}
                              </h1>
                              <p
                                style={{
                                  fontSize: "11px",
                                  lineHeight: "13px",
                                  color: "rgb(217 119 6)",
                                }}
                              >
                                An autoimmune body under Ministry of Education,
                                Govt Of India
                              </p>
                              <h6
                                style={{
                                  color: "white",
                                  fontSize: "9px",
                                  lineHeight: "11px",
                                }}
                              >
                                {schoolData.school_address}{" "}
                              </h6>
                            </div>
                          </div>

                          <div
                            id="school-contact-details"
                            style={{
                              display: "flex",
                              justifyContent: "space-around",
                              backgroundColor: "rgb(217 119 6)",
                              color: "white",
                              height: "15px",
                              alignItems: "center",
                            }}
                          >
                            <h4 style={{ fontSize: 10 }}>Email:</h4>
                            <h4 style={{ fontSize: 10 }}>Phone No:</h4>
                          </div>

                          <div
                            id="session"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "20px",
                            }}
                          >
                            <h3 style={{ fontSize: 13, color: "blue" }}>
                              Session: 2024-2025
                            </h3>
                          </div>
                          <div
                            id="session"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "26px",
                            }}
                          >
                            <h1
                              style={{
                                fontSize: "16px",
                                alignItems: "center",
                                padding: "4",
                              }}
                            >
                              Name:{" "}
                              <span style={{ fontSize: "18px", color: "blue" }}>
                                Sudeep Roy
                              </span>
                            </h1>
                          </div>
                          <div
                            id="student-photo-&-details"
                            style={{
                              display: "flex",
                              justifyContent: "space-around",
                              padding: "0.25rem",
                              height: "14px",
                              paddingLeft: "45px",
                              paddingRight: "20px",
                            }}
                          >
                            <div
                              id="student photo"
                              style={{ flexBasis: "26%" }}
                            >
                              {/*<img
                                src=""
                                alt=""
                                style={{ width: 74, height: 99 }}
                          />*/}
                            </div>

                            <div
                              id="student-details"
                              style={{
                                width: "calc(66.66% - 4px)",
                                flex: 1,
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "center",

                                height: "130px",
                                padding: "10px",
                              }}
                            >
                              <div style={{ display: "flex", gap: "15px" }}>
                                <h3
                                  style={{
                                    margin: 0,
                                    fontSize: 11,
                                    lineHeight: 1.5,
                                  }}
                                >
                                  Class:<span style={{ color: "blue" }}>X</span>
                                </h3>
                                <h3
                                  style={{
                                    margin: 0,
                                    fontSize: 11,
                                    lineHeight: 1.5,
                                  }}
                                >
                                  Section:
                                  <span style={{ color: "blue" }}>A</span>
                                </h3>
                              </div>
                              <h3
                                style={{
                                  margin: 0,
                                  fontSize: 11,
                                  lineHeight: 1.5,
                                }}
                              >
                                Father's Name:{" "}
                                <span style={{ color: "blue" }}>
                                  Raghubir Das
                                </span>
                              </h3>
                              <div style={{ display: "flex", gap: "15px" }}>
                                <h3
                                  style={{
                                    margin: 0,
                                    fontSize: 11,
                                    lineHeight: 1.5,
                                  }}
                                >
                                  Date of Birth:{" "}
                                  <span style={{ color: "blue" }}>
                                    01.01.2010
                                  </span>
                                </h3>
                                <h3
                                  style={{
                                    margin: 0,
                                    fontSize: 11,
                                    lineHeight: 1.5,
                                  }}
                                >
                                  Blood Group:{" "}
                                  <span
                                    style={{ fontWeight: "bold", color: "red" }}
                                  >
                                    O+
                                  </span>
                                </h3>
                              </div>
                              <h3
                                style={{
                                  margin: 0,
                                  fontSize: 11,
                                  lineHeight: 1.5,
                                }}
                              >
                                Contact No:{" "}
                                <span style={{ color: "blue" }}>
                                  9123456789
                                </span>
                              </h3>
                              <h3
                                style={{
                                  margin: 0,
                                  fontSize: 11,
                                  lineHeight: 1.5,
                                }}
                              >
                                Student ID UBI:{" "}
                                <span style={{ color: "blue" }}>
                                  1234567890
                                </span>
                              </h3>
                              <h3
                                style={{
                                  margin: 0,
                                  fontSize: 11,
                                  lineHeight: 1.5,
                                }}
                              >
                                Address:{" "}
                                <span style={{ color: "blue" }}>
                                  Raipur, Raiganj, Uttar Dinajpur, Pin-733134
                                </span>
                              </h3>
                            </div>
                          </div>

                          {/*<div
              id="p-signature"
              style={{ display: "flex", justifyContent: "flex-end" }}
            ><img
                id="principle-signature"
                src="./Assets/signature.png"
                alt=""
                className="mr-5 w-12 h-5 "
              />
              <h4>Principle Signature</h4>
            </div>
              */}
                        </div>
                        ;
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </section>
            <footer class="main-footer">
              <div class="float-right d-none d-sm-block">
                <b>Version</b> 3.2.0
              </div>
              <strong>
                Copyright &copy; 2014-2023{" "}
                <a href="http://rvssgroup.com/">RVSS</a>.
              </strong>{" "}
              All rights reserved.
            </footer>
            <aside class="control-sidebar control-sidebar-dark"></aside>
          </div>
        </div>
      </div>
      <script src="../../plugins/jquery/jquery.min.js"></script>
      <script src="../../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="../../plugins/select2/js/select2.full.min.js"></script>
      <script src="../../plugins/bootstrap4-duallistbox/jquery.bootstrap-duallistbox.min.js"></script>
      <script src="../../plugins/moment/moment.min.js"></script>
      <script src="../../plugins/inputmask/jquery.inputmask.min.js"></script>
      <script src="../../plugins/daterangepicker/daterangepicker.js"></script>
      <script src="../../plugins/bootstrap-colorpicker/js/bootstrap-colorpicker.min.js"></script>
      <script src="../../plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"></script>
      <script src="../../plugins/bootstrap-switch/js/bootstrap-switch.min.js"></script>
      <script src="../../plugins/bs-stepper/js/bs-stepper.min.js"></script>
      <script src="../../plugins/dropzone/min/dropzone.min.js"></script>
      <script src="../../dist/js/adminlte.min.js?v=3.2.0"></script>
      <script src="../../dist/js/demo.js"></script>
      <script>function render(){}</script>
      <script>window.onload = function () {}</script>
    </body>
  );
};

export default AdminLteSchoolSuccessForm;
