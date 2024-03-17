import Webcam from "react-webcam";
import { useRef, useState, useCallback } from "react"; // import useRef
import { FcCompactCamera } from "react-icons/fc";
import { FcSwitchCamera } from "react-icons/fc";
import { FaUpload } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const CustomWebcam = ({ onClose, selectedCard, onSubmit }) => {
  const webcamRef = useRef(null); // create a webcam reference
  const [imgSrc, setImgSrc] = useState(null); // initialize it

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  const retake = () => {
    setImgSrc(null);
  };

  {
    /*const handleUpload = () => {
    onSubmit(imgSrc);
  };
  
onClick={handleUpload}

*/
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="mt-10 flex flex-col gap-5 text-white">
        <button className="place-self-end" onClick={onClose}>
          <RxCross2 />
        </button>
        <div className="flex flex-col gap-5 bg-white px-20 py-10 rounded-lg mx-4 items-center">
          <div className="container flex flex-col justify-center items-center gap-3">
            {imgSrc ? (
              <div className="flex h-screen">
                <div
                  className="wrapper"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "25px",
                    width: "650px",
                  }}
                >
                  <div
                    style={{
                      width: "100%", // Set the desired width
                      height: "100%", // Set the desired height
                      overflow: "hidden", // Hide any content that overflows the container
                    }}
                  >
                    <div id="IDCard" className="row">
                      <div className="col-6" id="template4">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                          }}
                        >
                          <div
                            style={{
                              width: "350px", // Reduced the width
                              borderRadius: "10px", // Smaller border radius
                              paddingTop: "2%",
                              backgroundColor: "#E5E4E2", // Orange
                              overflow: "hidden",
                            }}
                          >
                            <div style={{ backgroundColor: "#3F000F" }}>
                              <div
                                style={{
                                  fontFamily: "Arial, sans-serif",
                                  color: "white", // Blue
                                  fontSize: "2rem",
                                  textAlign: "center",
                                  padding: "2%",
                                  fontSize: "25px",
                                  display: "flex",
                                  height: "100%",
                                }}
                              >
                                <div
                                  style={{
                                    width: "30%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  <img
                                    src="https://1.bp.blogspot.com/-Y2Mqj01Rx7o/WIQaMix1MjI/AAAAAAAAFAY/HnvQGqbnbjMBeYINyo_c3fClBvZPPvv9ACLcB/s320/kvs-logo.png"
                                    alt="School Logo"
                                    style={{
                                      width: "100%",
                                      padding: "10px",
                                    }}
                                  />
                                </div>
                                <h6>{selectedCard.school_name}</h6>
                              </div>
                              {/*<p>
An Autonomous Body Under Ministry of Education, Govt Of India
</p>*/}
                              <p
                                style={{
                                  fontFamily: "Verdana, sans-serif",
                                  color: "white", // Red
                                  textAlign: "center",
                                  fontSize: "8px", // Increased font size
                                  marginLeft: "30%",
                                }}
                              >
                                {selectedCard.school_address}{" "}
                              </p>
                            </div>

                            <div
                              style={{
                                color: "#D35400", // Orange
                                textAlign: "center",
                                fontFamily: "Tahoma, sans-serif",
                                fontSize: "1.2rem", // Increased font size
                                fontWeight: "bold",
                                paddingTop: "10%",
                              }}
                            >
                              Session: 2024-2025
                            </div>

                            <div
                              style={{
                                height: "20%", // Reduced height
                                gap: "12px",
                                paddingTop: "3%",
                                paddingLeft: "5%",
                                paddingRight: "2%",
                                color: "white",
                                fontFamily: "Calibri, sans-serif",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  marginTop: "5%",
                                }}
                              >
                                <div
                                  style={{
                                    backgroundColor: "White", // Green
                                    height: "100px", // Reduced height
                                    width: "100px", // Reduced width
                                    // borderRadius: '50%',
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderStyle: "solid",
                                    borderWidth: "2px",
                                    borderColor: "#FDDA0D",
                                    borderRadius: "50%",
                                  }}
                                >
                                  <div
                                    style={{
                                      height: "100px", // Reduced height
                                      width: "100px", // Reduced width
                                      overflow: "hidden",
                                      borderRadius: "50%",
                                      padding: "2",
                                    }}
                                  >
                                    <img
                                      src={imgSrc}
                                      alt="Student"
                                      style={{ width: "100%" }}
                                      className="mt-3"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div style={{ width: "100%" }}>
                                <ul
                                  className="details-list"
                                  style={{
                                    marginTop: "5%",
                                    fontSize: "0.8rem",
                                    color: "black",
                                  }}
                                >
                                  <li>
                                    Name:{" "}
                                    <span>{selectedCard.student.name}</span>
                                  </li>
                                  <li>
                                    Father name:{" "}
                                    <span>
                                      {selectedCard.student.father_name}
                                    </span>
                                  </li>
                                  <li>
                                    D.O.B:{" "}
                                    <span>{selectedCard.student.dob}</span>
                                  </li>
                                  <li>
                                    Blood Group:
                                    {selectedCard.student.b_groop}
                                    <span>{}</span>
                                  </li>
                                  <li>
                                    Contact No:{" "}
                                    <span>
                                      {selectedCard.student.contact_no}
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div
                              style={{
                                color: "#D35400", // Orange

                                fontFamily: "Tahoma, sans-serif",
                                // Increased font size

                                width: "100%",
                              }}
                            >
                              <div
                                style={{
                                  fontSize: "0.6rem",
                                  fontWeight: "bold",
                                  textAlign: "right",
                                  marginTop: "10%",
                                  padding: "2%",
                                }}
                              >
                                {" "}
                                <p
                                  style={{
                                    marginLeft: "60%",
                                    textAlign: "center",
                                    color: "black",
                                    fontFamily: "Cedarville Cursive",
                                  }}
                                >
                                  {selectedCard.principal.name}
                                </p>
                                Principal Name
                              </div>
                            </div>

                            <div
                              style={{
                                width: "100%",
                                paddingLeft: "5%",
                                paddingRight: "5%",
                                paddingBottom: "3%",
                                marginBottom: "20%",
                                fontFamily: "Tahoma, sans-serif",
                                color: "#D35400",
                              }}
                            >
                              <span>
                                <h4>Adress</h4>
                              </span>
                              <p
                                style={{
                                  fontSize: "0.8rem",
                                  color: "black",
                                }}
                              >
                                {selectedCard.student.address}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-3">
                  <button
                    onClick={retake}
                    className="rounded-full border-2 p-5 hover:"
                  >
                    <FcSwitchCamera className="size-12" />
                  </button>

                  <div
                    id="school_id"
                    className="flex space-x-6 mt-2 text-2xl font-bold py-2 px-12 rounded-full"
                  >
                    School id:{selectedCard.school_id}
                  </div>

                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded inline-flex items-center gap-2">
                    <FaUpload />
                    <span>Submit</span>
                  </button>
                </div>
              </div>
            ) : (
              <Webcam height={400} width={400} ref={webcamRef} />
            )}
            <div className="btn-container">
              {imgSrc ? (
                <></>
              ) : (
                <button onClick={capture} className="rounded-full border-2 p-5">
                  <FcCompactCamera className="size-12" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomWebcam;
