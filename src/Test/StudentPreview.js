import React, { useState } from "react";
import { FaUpload } from "react-icons/fa6";
import CustomWebcam from "./CustomWebCam";
import UploadPhoto from "./UploadPhoto";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const StudentPreview = ({ selectedCard }) => {
  //const [detail, setDetail] = useState();

  const [showModel, setShowModel] = useState(false);
  const [photoUpload, setphotoUpload] = useState(false);
  const [loader, setLoader] = useState(false);

  const downloadPDF = () => {
    const capture = document.querySelector("#IDCard");
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save("IDCard.pdf");
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      {selectedCard ? (
        <>
          <div
            style={{
              backgroundColor: "white",
              border: "2px solid black",
              height: "507.5px",
              width: "319px",
            }}
          >
            <div
              id="header"
              style={{
                display: "flex",
                backgroundColor: "rgb(69 10 10)",
                height: "95px",
                paddingTop: "3px",
              }}
            >
              <div
                style={{
                  width: "25%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0.70rem ",
                }}
              >
                <img src="./Assets/id-school-logo.png" alt="" />
              </div>
              <div
                style={{
                  width: "75%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h1
                  style={{
                    fontSize: "13.5px",
                    color: "white",
                    textTransform: "capitalize",
                    fontWeight: "bold",
                  }}
                >
                  {selectedCard.school_name}
                </h1>
                <p
                  style={{
                    fontSize: "7px",
                    lineHeight: "5px",
                    color: "rgb(217 119 6)",
                  }}
                >
                  An autoimmune body under Ministry of Education, Govt Of India
                </p>
                <h6
                  style={{
                    color: "white",
                    fontSize: "5px",
                    lineHeight: "5px",
                  }}
                >
                  {selectedCard.school_address}
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
              <h4 style={{ fontSize: 8 }}>Email:</h4>
              <h4 style={{ fontSize: 8 }}>Phone No:</h4>
            </div>

            <div
              id="session"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "20px",
                marginBottom: "50px",
              }}
            >
              <h3 style={{ fontSize: 13, color: "blue" }}>
                Session: 2024-2025
              </h3>
            </div>

            <div
              id="student-photo"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "26px",
              }}
            >
              {selectedCard.img ? (
                <div id="student photo" style={{ flexBasis: "26%" }}>
                  <img
                    src={selectedCard.img}
                    alt=""
                    style={{ width: 74, height: 99 }}
                  />
                </div>
              ) : (
                <div id="student photo">
                  <FaUpload
                    className="size-24 "
                    onClick={() => setShowModel(true)}
                  />
                  {showModel && (
                    <CustomWebcam
                      onClose={() => setShowModel(false)}
                      selectedCard={selectedCard}
                    />
                  )}
                </div>
              )}
            </div>

            <div
              id="student-name"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "26px",
                marginTop: "50px",
              }}
            >
              <h1
                style={{ fontSize: "16px", alignItems: "center", padding: "4" }}
              >
                Name:{" "}
                <span style={{ fontSize: "18px", color: "blue" }}>
                  {selectedCard.student.name}
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
                marginTop: "70px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                id="student-details"
                style={{
                  width: "calc(66.66% - 4px)",
                  flex: 1,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
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
                  <span style={{ color: "blue" }}>
                    {selectedCard.student.father_name}
                  </span>
                </h3>

                <h3 style={{ margin: 0, fontSize: 11, lineHeight: 1.5 }}>
                  Date of Birth:{" "}
                  <span style={{ color: "blue" }}>
                    {selectedCard.student.dob}
                  </span>
                </h3>
                <h3 style={{ margin: 0, fontSize: 11, lineHeight: 1.5 }}>
                  Blood Group:{" "}
                  <span style={{ fontWeight: "bold", color: "red" }}>O+</span>
                </h3>

                <h3 style={{ margin: 0, fontSize: 11, lineHeight: 1.5 }}>
                  Contact No:{" "}
                  <span style={{ color: "blue" }}>
                    {selectedCard.student.contact_no}
                  </span>
                </h3>
                <h3 style={{ margin: 0, fontSize: 11, lineHeight: 1.5 }}>
                  Student ID UBI:{" "}
                  <span style={{ color: "blue" }}>1234567890</span>
                </h3>
                <h3 style={{ margin: 0, fontSize: 11, lineHeight: 1.5 }}>
                  Address:{" "}
                  <span style={{ color: "blue" }}>
                    {selectedCard.student.address}
                  </span>
                </h3>
              </div>
            </div>

            <div
              id="p-signature"
              style={{
                display: "flex",
                alignItems: "flex-end",
                flexDirection: "column",
                marginTop: "70px",
                marginRight: "15px",
              }}
            >
              <img
                id="principle-signature"
                src="./Assets/signature.png"
                alt=""
                className="mr-5 w-12 h-5 "
              />
              <h4 style={{ fontSize: "11px" }}>Principle Signature</h4>
            </div>
          </div>
          {selectedCard.img ? (
            <>
              <div
                id="school_id"
                className="flex space-x-6 mt-2 text-2xl font-bold py-2 px-12 rounded-full"
              >
                School id:{selectedCard.school_id}
              </div>

              <div id="button" className="flex space-x-6 mt-2">
                <button className="border-2 text-2xl bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-12 rounded-full">
                  Accept
                </button>
                <button className="border-2 text-2xl bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded-full">
                  Reject
                </button>
              </div>

              <div>
                <button
                  className="flex space-x-6 mt-4 border-2 text-2xl bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-12 rounded-full"
                  onClick={downloadPDF}
                  disabled={!(loader === false)}
                >
                  {loader ? <span>Downloading</span> : <span>Download</span>}
                </button>
              </div>
            </>
          ) : (
            <div id="button" className="flex space-x-6 mt-4">
              <button
                className="bg-violet-500 px-4 py-2 rounded-xl text-lg text-white"
                onClick={() => setphotoUpload(true)}
              >
                Upload Student Photo
              </button>
              {photoUpload && (
                <UploadPhoto
                  onClose={() => setphotoUpload(false)}
                  selectedCard={selectedCard}
                />
              )}
            </div>
          )}
        </>
      ) : (
        <h3 className="text-gray-600">Select a card to preview</h3>
      )}
    </div>
  );
};

export default StudentPreview;
