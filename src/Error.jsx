import React from "react";
import Logo from "./assets/images/rvssGroup_white.png";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f8f9fa",
    },
    content: {
      textAlign: "center",
    },
    errorCode: {
      fontSize: "72px",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#dc3545",
    },
    message: {
      fontSize: "24px",
      color: "#343a40",
      marginBottom: "20px",
    },
    button: {
      padding: "10px 20px",
      fontSize: "18px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      textDecoration: "none",
    },
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
          </nav>
          <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <a href="http://rvssgroup.com/" class="brand-link">
              <img
                src={Logo}
                class="img-responsive"
                style={{ alignSelf: "left", marginRight: "120px" }}
              />
            </a>
            <div class="sidebar" style={{ height: "100vh" }}>
              <div class="form-inline">
                <nav class="mt-2">
                  <ul
                    class="nav nav-pills nav-sidebar flex-column"
                    data-widget="treeview"
                    role="menu"
                    data-accordion="false"
                  >
                    <li class="nav-item">
                      <a href="http://rvssgroup.com/" class="nav-link">
                        <i class="nav-icon fas fa-ellipsis-h"></i>
                        <p>About RVSS</p>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="http://rvssgroup.com/" class="nav-link">
                        <i class="nav-icon fas fa-file"></i>
                        <p>About ID Card Solution</p>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </aside>
        </div>
      </body>

      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.errorCode}>404</div>
          <div style={styles.message}>Page Not Found</div>
          <button style={styles.button} onClick={handleBackHome}>
            Back Home
          </button>
        </div>
      </div>
    </>
  );
}

export default Error;
