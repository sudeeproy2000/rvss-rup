import React, { useState } from "react";
import Logo from "../assets/images/rvssGroup_white.png";
import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/plugins/daterangepicker/daterangepicker.js";
import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/dist/js/adminlte.min.js";
import { useNavigate } from "react-router-dom";

import StudentCard from "./StudentCard";
import StudentPreview from "./StudentPreview";
import StudentCardShimmer from "./StudentCardShimmer";

const ClassTeacherDashBoard = () => {
  const [selectedCard, setSelectedCard] = useState(null);

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

  const cards = [
    {
      index: "1",
      type: "vertical",
      school_id: "1a2b3c4d5e6",
      school_name: "Kendriya Vidyalaya No.1, Salt Lake",
      school_address:
        "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
      principal: { name: "S Roy" },
      student: {
        name: "Sudeep Roy",
        father_name: "Swapan Roy",
        dob: "19/01/2000",
        b_group: "O+",
        contact_no: "7031032675",
        address: "608 Denesik Square, Port Rayfordbury, MN 48505",
      },
    },
    {
      index: "2",
      type: "horizontal",
      school_id: "1a2b3c4d5e6",
      img: "./Assets/2.jpg",
      school_name: "Kendriya Vidyalaya No.1, Salt Lake",
      school_address:
        "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
      principal: { name: "S Roy" },
      student: {
        name: "Sudip Das",
        father_name: "P Das",
        dob: "19/01/1987",
        b_group: "AB+",
        contact_no: "7031234567",
        address: "43035 Johnsie Port, Port Elmira, CT 49298-6961",
      },
    },
    {
      index: "3",
      type: "horizontal",
      school_id: "1a2b3c4d5e6",
      img: "./Assets/3.jpg",
      school_name: "Kendriya Vidyalaya No.1, Salt Lake",
      school_address:
        "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
      principal: { name: "S Roy" },
      student: {
        name: "S Roy",
        father_name: "D Roy",
        dob: "19/02/2000",
        b_group: "A+",
        contact_no: "7031123475",
        address: "70103 Ward Stravenue, New Benedictbury, MN 37616-6713",
      },
    },
    {
      index: "4",
      type: "horizontal",
      school_id: "1a2b3c4d5e6",
      img: "./Assets/4.jpg",
      school_name: "Kendriya Vidyalaya No.1, Salt Lake",
      school_address:
        "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
      principal: { name: "S Roy" },
      student: {
        name: "Sudeep Roy",
        father_name: "Swapan Roy",
        dob: "19/01/2000",
        b_group: "O+",
        contact_no: "7031032675",
        address: "Suite 960 8549 Langosh Neck, New Shara, VT 24824",
      },
    },
    {
      index: "5",
      type: "horizontal",
      school_id: "1a2b3c4d5e6",
      img: "./Assets/5.jpg",
      school_name: "Kendriya Vidyalaya No.1, Salt Lake",
      school_address:
        "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
      principal: { name: "S Roy" },
      student: {
        name: "Sudeep Roy",
        father_name: "Swapan Roy",
        dob: "19/01/2000",
        b_group: "O+",
        contact_no: "7031032675",
        address:
          "Suite 499 4514 Altenwerth Viaduct, Port Kristofer, NJ 48194-9062",
      },
    },
    {
      index: "6",
      type: "horizontal",
      school_id: "1a2b3c4d5e6",
      school_name: "Kendriya Vidyalaya No.1, Salt Lake",
      school_address:
        "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
      principal: { name: "S Roy" },
      student: {
        name: "Samir Roy",
        father_name: "Swapan Roy",
        dob: "19/01/2000",
        b_group: "O+",
        contact_no: "7031032675",
        address: "6500 Krystal Glen, South Ianmouth, ME 87157-8846",
      },
    },
    {
      index: "7",
      type: "horizontal",
      school_id: "1a2b3c4d5e6",
      img: "./Assets/7.jpg",
      school_name: "Kendriya Vidyalaya No.1, Salt Lake",
      school_address:
        "Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
      principal: { name: "S Roy" },
      student: {
        name: "Sudeep Roy",
        father_name: "Swapan Roy",
        dob: "19/01/2000",
        b_group: "O+",
        contact_no: "7031032675",
        address: "115 Hagenes Plain, New Dwayneberg, CA 52776-1425",
      },
    },
  ];

  const handleCardSelect = (card) => {
    setSelectedCard(card);
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

      {!cards.length ? (
        <StudentCardShimmer />
      ) : (
        <div className="flex  bg-blue-400">
          <StudentCard cards={cards} onSelect={handleCardSelect} />
          <StudentPreview selectedCard={selectedCard} />
        </div>
      )}
    </>
  );
};

export default ClassTeacherDashBoard;
