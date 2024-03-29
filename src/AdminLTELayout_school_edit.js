import React, { useState, useContext, useEffect } from "react";
import Logo from "./assets/images/rvssGroup_white.png";
import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/plugins/daterangepicker/daterangepicker.js";
import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/dist/js/adminlte.min.js";
import ImageUpload from "./ImageUpload.js";
import AdminLteStudentForm from "./AdminLTELayout_student.js";
import { IcardContext } from "./Context/DataProvider.jsx";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import Icard_template from "./template/Icard_template.jsx";

import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

const AdminLteSchoolFormEdit = (props) => {
  const navigate1 = useNavigate();

  function goToTeacher() {
    navigate1("/teacher");
  }

  const { schoolData } = useContext(IcardContext);

  console.log(schoolData.principal_mobile_number);

  const { idcardtemplate } = useContext(IcardContext); // Import and destructure setAccount

  const { setSchoolData } = useContext(IcardContext); // Import and destructure setAccount

  //console.log(idcardtemplate);

  const school_id = schoolData.school_id;
  const date = new Date(schoolData.school_registration_date);

  const schoolNames = [
    "The Doon School",
    "Little Flower High School",
    "Verbena Pre School",
    // Add more school names as needed
  ];

  const navigate = useNavigate();
  const [formState, setFormState] = useState({});
  const [startDate, setStartDate] = useState(
    new Date(schoolData.school_registration_date)
  );

  const [submit, setSubmitData] = useState("");
  const [formData, setFormData] = useState({
    school_id: school_id,
    school_name: schoolData.school_name || "",
    school_email: schoolData.school_email || "",
    school_registration_date: startDate, // Use your logic to set the date here
    school_address: schoolData.school_address || "",
    school_city: schoolData.school_city || "",
    school_state: schoolData.school_state || "",
    school_pincode: schoolData.school_pincode || "",
    school_mobile_number: schoolData.phones.mobile_number || "",
    school_fax: schoolData.phones.fax || "",
    principal_salutation: schoolData.principal.salutation || "",
    principal_name: schoolData.principal.name || "",
    principal_email: schoolData.principal.email || "",
    principal_mobile_number: schoolData.principal.phones.mobile_number || "",
  });

  function createPrincipal(
    principal_salutation,
    principal_name,
    principal_email,
    phones
  ) {
    return {
      salutation: principal_salutation,
      name: principal_name,
      email: principal_email,
      phones: phones,
    };
  }
  function createSchoolFiles(
    school_image1,
    school_image1_location,
    school_image2,
    school_image2_location
  ) {
    return {
      image1_id: school_image1,
      image2_id: school_image2,
      image1_location: school_image1_location,
      image2_location: school_image2_location,
    };
  }
  function createPhones(mobile_number, fax) {
    return {
      mobile_number: mobile_number,
      fax: fax,
    };
  }

  function createSchool(
    school_id,
    school_name,
    school_email,
    school_registration_date,
    school_address,
    school_city,
    school_state,
    school_pincode,
    phones,
    principal,
    schoolFiles
  ) {
    return {
      school_id: school_id,
      school_name: school_name,
      school_email: school_email,
      school_address: school_address,
      school_city: school_city,
      school_state: school_state,
      school_pincode: school_pincode,
      school_status: "SUBMITTED",
      school_adminEmail: school_email,
      school_registration_date: school_registration_date,
      icard_template: idcardtemplate,
      phones: phones,
      principal: principal,
      schoolFiles: schoolFiles,
    };
  }

  const handleChange = (e) => {
    // Check if the event object has a target (for regular input fields)
    if (e.target) {
      const { name, value } = e.target;
      setFormState({
        ...formState,
        [name]: value,
      });
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      // Handle Typeahead component (selected value)
      const selectedValue = e[0] || ""; // Get the first selected value or an empty string
      setFormState({
        ...formState,
        school_name: selectedValue,
      });
      setFormData({
        ...formData,
        school_name: selectedValue,
      });
    }
  };

  const handleImageUpload = (data) => {
    // console.log("Image Data "+data.imageId+"  "+data.file_name);
    if (data.imageId == "1") {
      formData.school_image1 = data.file_name;
      formData.school_image1_location = data.location;
    } else {
      formData.school_image2 = data.file_name;
      formData.school_image2_location = data.location;
    }
  };
  // console.log("School id "+school_id+"  "+formData.school_image2_location+"   "+formData.school_image1_location)

  const handleSubmit = (e) => {
    if (
      formData.principal_mobile_number &&
      formData.school_name &&
      formData.school_mobile_number &&
      formData.school_fax &&
      formData.principal_name &&
      formData.school_address &&
      formData.school_image1_location &&
      formData.school_image2_location
    ) {
      e.preventDefault();
      // Handle form submission here

      var principal_phones = createPhones(
        formData.principal_mobile_number,
        formData.school_fax
      );
      var school_phones = createPhones(
        formData.school_mobile_number,
        formData.school_fax
      );
      var principal = createPrincipal(
        formData.principal_salutation,
        formData.principal_name,
        formData.principal_email,
        principal_phones
      );
      var schoolFiles = createSchoolFiles(
        formData.school_image1,
        formData.school_image1_location,
        formData.school_image2,
        formData.school_image2_location
      );
      var school = createSchool(
        school_id,
        formData.school_name,
        formData.school_email,
        schoolData.school_registration_date,
        formData.school_address,
        formData.school_city,
        formData.school_state,
        formData.school_pincode,
        school_phones,
        principal,
        schoolFiles
      );

      // console.log(school);
      // console.log(formData);
      setSchoolData(school);
      localStorage.setItem("school", JSON.stringify(school));
      navigate(`/school/schoolSuccess`);
    } else {
      alert("Please fill in all required fields and upload images.");
    }
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
                </ul>
              </nav>
            </div>
          </div>
        </aside>
        <div class="content-wrapper">
          <div className="card">
            <section
              class="content-header"
              style={{ marginTop: "10px" }}
            ></section>

            <section class="content">
              <div class="container-fluid">
                <div style={{ textAlign: "center" }}>
                  <h2>School Registration</h2>
                </div>

                <div>
                  <span>
                    <h4 style={{ textAlign: "center" }}>
                      Select your template by clicking on the template{" "}
                    </h4>
                  </span>
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "12px",
                      paddingTop: "2%",
                    }}
                  >
                    <Icard_template />
                  </div>
                </div>
              </div>
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-6">
                    <div className="card-body">
                      <div class="card card-primary">
                        <div class="card-header">
                          <h3 class="card-title">School Details</h3>
                        </div>
                        <form onSubmit={handleSubmit}>
                          <div className="card-body" color="#GEGEGE">
                            <div className="card card-primary">
                              <label htmlFor="inputName">
                                School Id is {school_id}{" "}
                              </label>
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="inputName">School Name</label>
                            <Typeahead
                              id="school_name"
                              labelKey="name"
                              options={schoolNames}
                              placeholder="Enter School Name"
                              defaultSelected={[schoolData.school_name]} // Use defaultSelected instead of value
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="inputName">
                              Date of Registration
                            </label>
                            <DatePicker
                              id="dateOfRegistration"
                              name="school_registration_date"
                              selected={startDate}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="inputName">School Address</label>
                            <input
                              type="text"
                              name="school_address"
                              className="form-control"
                              id="school_address"
                              placeholder=" Enter School Address"
                              onChange={handleChange}
                              value={schoolData.school_address}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="inputName">School City</label>
                            <input
                              type="text"
                              name="school_city"
                              className="form-control"
                              id="school_city"
                              placeholder=" Enter School City"
                              onChange={handleChange}
                              value={schoolData.school_city}
                            />
                          </div>
                          <div class="form-group">
                            <label>State</label>
                            <select
                              class="custom-select"
                              id="school_state"
                              name="school_state"
                              value={schoolData.school_state}
                              onChange={handleChange}
                            >
                              <option value="">Select an option</option>
                              <option>West Bengal</option>
                              <option>Karnataka</option>
                              <option>Maharastra</option>
                              <option>Rajasthan</option>
                              <option>Gujrat</option>
                              <option>Madhya Pradesh</option>
                              <option>Odisha</option>
                              <option>Assam</option>
                              <option>Meghalaya</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label htmlFor="inputName">Pincode</label>
                            <input
                              type="text"
                              name="school_pincode"
                              className="form-control"
                              id="school_pincode"
                              value={formData.school_pincode}
                              placeholder=" Enter School Address"
                              onChange={handleChange}
                            />
                          </div>
                          <div class="row">
                            <div class="col-12 col-sm-6">
                              <div className="form-group">
                                <label htmlFor="inputName">
                                  School Phone Number 1
                                </label>
                                <div class="input-group-prepend">
                                  <span class="input-group-text">
                                    <i class="fas fa-phone"></i>
                                  </span>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="school_mobile_number"
                                    name="school_mobile_number"
                                    value={formData.school_mobile_number}
                                    placeholder="Primary Contact"
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>
                              <div className="form-group">
                                <label htmlFor="inputName">
                                  School Phone Number 2
                                </label>
                                <div class="input-group-prepend">
                                  <span class="input-group-text">
                                    <i class="fas fa-phone"></i>
                                  </span>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="fax"
                                    name="school_fax"
                                    value={formData.school_fax}
                                    placeholder=" Enter School Fax Number"
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="form-group">
                            <label htmlFor="inputEmail">
                              School Admin Email
                            </label>
                            <div class="input-group-prepend">
                              <span class="input-group-text">
                                <i class="fas fa-envelope"></i>
                              </span>
                            </div>
                            <input
                              type="email"
                              name="school_email"
                              className="form-control"
                              id="school_email"
                              placeholder="Enter School Phone Admin Email Address"
                              value={formData.school_email}
                              onChange={handleChange}
                            />
                          </div>
                          <div class="card card-primary">
                            <div class="card-header">
                              <h3 class="card-title">Principal Details</h3>
                            </div>
                            <div class="form-group">
                              <label>Salutation</label>
                              <select
                                class="custom-select"
                                id="principal_salutation"
                                name="principal_salutation"
                                value={formData.principal_salutation}
                                onChange={handleChange}
                              >
                                <option value="">Select an option</option>
                                <option>Dr.</option>
                                <option>Mr.</option>
                                <option>Mrs.</option>
                                <option>Prof.</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label htmlFor="inputName">Principal Name</label>
                              <input
                                type="text"
                                name="principal_name"
                                className="form-control"
                                id="principal_name"
                                placeholder="Enter Principal Name"
                                value={formData.principal_name}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="inputName">
                                Principal Mobile Number
                              </label>

                              <div class="input-group-prepend">
                                <span class="input-group-text">
                                  <i class="fas fa-phone"></i>
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="principal_mobile_number"
                                  name="principal_mobile_number"
                                  value={formData.principal_mobile_number}
                                  placeholder="Pricipal Mobile Number"
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="form-group">
                              <label htmlFor="inputEmail">
                                Principal Email
                              </label>
                              <div class="input-group-prepend">
                                <span class="input-group-text">
                                  <i class="fas fa-envelope"></i>
                                </span>
                              </div>
                              <input
                                type="email"
                                name="principal_email"
                                className="form-control"
                                id="principal_email"
                                placeholder="Principal Email"
                                value={formData.principal_email}
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="card card-primary">
                      <div class="card-header">
                        <h3 class="card-title">Image Upload</h3>
                      </div>
                      <div class="form-group">
                        <label htmlFor="inputName">ICard Logo Image</label>
                        <div className="wrapper">
                          <ImageUpload
                            school_id={school_id}
                            image_id="1"
                            onImageUpload={handleImageUpload}
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label htmlFor="inputName">ICard Main Image</label>
                        <div className="wrapper">
                          <ImageUpload
                            school_id={school_id}
                            image_id="2"
                            onImageUpload={handleImageUpload}
                          />
                        </div>
                      </div>
                    </div>
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

export default AdminLteSchoolFormEdit;
