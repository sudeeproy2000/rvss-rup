import React, { useContext } from "react";
import { IcardContext } from "../Context/DataProvider.jsx";

//import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Template4 = () => {
  const imageUrl =
    "https://1.bp.blogspot.com/-Y2Mqj01Rx7o/WIQaMix1MjI/AAAAAAAAFAY/HnvQGqbnbjMBeYINyo_c3fClBvZPPvv9ACLcB/s320/kvs-logo.png";
  const { obj } = useContext(IcardContext); // Import and destructure setAccount

  return (
    <div className="row">
      <div className="col-6" id="template4">
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
              <img src="./Assets/id-school-logo.png" alt="" />
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
                KENDRIYA VIDYALAYA KV NO.1 SALT LAKE
              </h1>
              <p
                style={{
                  fontSize: "11px",
                  lineHeight: "13px",
                  color: "rgb(217 119 6)",
                }}
              >
                An autoimmune body under Ministry of Education, Govt Of India
              </p>
              <h6
                style={{
                  color: "white",
                  fontSize: "9px",
                  lineHeight: "11px",
                }}
              >
                Labony, Salt Lake, 3rd Ave, EB Block, Sector 1, Bidhannagar,
                Kolkata, West Bengal 700064
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
            <h3 style={{ fontSize: 13, color: "blue" }}>Session: 2024-2025</h3>
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
              style={{ fontSize: "16px", alignItems: "center", padding: "4" }}
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
            <div id="student photo" style={{ flexBasis: "26%" }}>
              <img
                src="./Assets/2.jpg"
                alt=""
                style={{ width: 74, height: 99 }}
              />
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
                <h3 style={{ margin: 0, fontSize: 11, lineHeight: 1.5 }}>
                  Class:<span style={{ color: "blue" }}>X</span>
                </h3>
                <h3 style={{ margin: 0, fontSize: 11, lineHeight: 1.5 }}>
                  Section:<span style={{ color: "blue" }}>A</span>
                </h3>
              </div>
              <h3 style={{ margin: 0, fontSize: 11, lineHeight: 1.5 }}>
                Father's Name:{" "}
                <span style={{ color: "blue" }}>Raghubir Das</span>
              </h3>
              <div style={{ display: "flex", gap: "15px" }}>
                <h3 style={{ margin: 0, fontSize: 11, lineHeight: 1.5 }}>
                  Date of Birth:{" "}
                  <span style={{ color: "blue" }}>01.01.2010</span>
                </h3>
                <h3 style={{ margin: 0, fontSize: 11, lineHeight: 1.5 }}>
                  Blood Group:{" "}
                  <span style={{ fontWeight: "bold", color: "red" }}>O+</span>
                </h3>
              </div>
              <h3 style={{ margin: 0, fontSize: 11, lineHeight: 1.5 }}>
                Contact No: <span style={{ color: "blue" }}>9123456789</span>
              </h3>
              <h3 style={{ margin: 0, fontSize: 11, lineHeight: 1.5 }}>
                Student ID UBI:{" "}
                <span style={{ color: "blue" }}>1234567890</span>
              </h3>
              <h3 style={{ margin: 0, fontSize: 11, lineHeight: 1.5 }}>
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
  );
};
export default Template4;
