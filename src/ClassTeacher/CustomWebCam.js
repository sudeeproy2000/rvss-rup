import Webcam from "react-webcam";
import { useRef, useState, useCallback } from "react"; // import useRef
import { FcCompactCamera } from "react-icons/fc";
import { FcSwitchCamera } from "react-icons/fc";
import { FaUpload } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const CustomWebcam = ({ onClose }) => {
  const webcamRef = useRef(null); // create a webcam reference
  const [imgSrc, setImgSrc] = useState(null); // initialize it

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  const retake = () => {
    setImgSrc(null);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="mt-10 flex flex-col gap-5 text-white">
        <button className="place-self-end" onClick={onClose}>
          <RxCross2 />
        </button>
        <div className="flex flex-col gap-5 bg-white px-20 py-10 rounded-lg mx-4 items-center">
          <div className="container flex flex-col justify-center items-center gap-3">
            {imgSrc ? (
              <img src={imgSrc} alt="webcam" />
            ) : (
              <Webcam height={400} width={400} ref={webcamRef} />
            )}
            <div className="btn-container">
              {imgSrc ? (
                <div className="flex flex-col justify-center items-center gap-3">
                  <button
                    onClick={retake}
                    className="rounded-full border-2 p-5 hover:"
                  >
                    <FcSwitchCamera className="size-12" />
                  </button>

                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded inline-flex items-center gap-2">
                    <FaUpload />
                    <span>Submit</span>
                  </button>
                </div>
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
