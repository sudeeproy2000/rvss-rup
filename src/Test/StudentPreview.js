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
    <>
      {selectedCard ? (
        <div
          className="flex flex-col h-screen justify-center items-center"
          style={{ width: "1015px", height: "638px" }}
        >
          <div className="flex justify-center items-center ">
            <div className="w-324 h-204 bg-white border border-gray-300 rounded-lg shadow-md flex flex-col">
              <div id="header" className="flex bg-red-950">
                <div className="basis-1/5 place-items-center p-3">
                  <img src="./Assets/id-school-logo.png" alt="" />
                </div>
                <div className="flex flex-col justify-center basis-4/5 place-items-center text-white">
                  <h1 className="font-semibold text-2xl ">
                    {selectedCard.school_name}
                  </h1>
                  <p className="font-light text-yellow-600 text-sm">
                    An autoimmune body under Ministry of Education, Govt Of
                    India
                  </p>
                  <h6 className="">{selectedCard.school_address} </h6>
                </div>
              </div>

              <div
                id="school-contact-details"
                className="flex justify-around bg-yellow-600 text-white"
              >
                <h4>Email:</h4>
                <h4>Phone No:</h4>
              </div>

              <div id="session" className="flex justify-center items-center">
                <h3 className="text-lg text-blue-800">Session: 2024-2025</h3>
              </div>

              <div id="student-photo-&-details" className="flex p-1">
                {selectedCard.img ? (
                  <div
                    id="student photo"
                    className="basis-1/3 flex justify-center place-items-center"
                  >
                    <img src={selectedCard.img} alt="" className="w-74 h-99" />
                  </div>
                ) : (
                  <div
                    id="student photo"
                    className="basis-1/3 flex justify-center place-items-center"
                  >
                    <FaUpload
                      className="size-16 "
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

                <div
                  id="student-details"
                  className="basis-2/3 flex flex-col place-items-center justify-center border-2"
                >
                  <h1 className="text-lg font-medium p-1">
                    Name:{" "}
                    <span className="text-blue-800">
                      {selectedCard.student.name}
                    </span>
                  </h1>
                  <div className="flex gap-12 p-1 text-sm">
                    <h3>
                      Class:<span className="text-blue-800">X</span>
                    </h3>
                    <h3>
                      Section:<span className="text-blue-800">A</span>
                    </h3>
                  </div>
                  <h3 className="p-1 text-sm">
                    Father's Name:
                    <span className="text-blue-800">
                      {selectedCard.student.father_name}
                    </span>
                  </h3>
                  <div className="flex gap-12 p-1 text-sm">
                    <h3>
                      Date of Birth:
                      <span className="text-blue-800">
                        {selectedCard.student.dob}
                      </span>
                    </h3>
                    <h3>
                      Blood Group:
                      <span className="text-blue-800">
                        {selectedCard.student.b_groop}
                      </span>
                    </h3>
                  </div>
                  <h3 className="p-1 text-sm">
                    Contact No:
                    <span className="text-blue-800">
                      {selectedCard.student.contact_no}
                    </span>
                  </h3>
                  <h3 className="p-1 text-sm">
                    Student ID UBI:
                    <span className="text-blue-800">1234567890</span>
                  </h3>
                  <div className="p-1 text-sm">
                    <h3>
                      Address:
                      <span className="text-blue-800">
                        {selectedCard.student.address}
                      </span>
                    </h3>
                  </div>
                </div>
              </div>

              <div
                id="p-signature"
                className="flex flex-col place-items-end mr-5"
              >
                <img
                  id="principle-signature"
                  src="./Assets/signature.png"
                  alt=""
                  className="mr-5 w-12 h-5 "
                />
                <h4 className="flex justify-end text-xs">
                  Principle Signature
                </h4>
              </div>
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
        </div>
      ) : (
        <h3 className="text-gray-600">Select a card to preview</h3>
      )}
    </>
  );
};

export default StudentPreview;
