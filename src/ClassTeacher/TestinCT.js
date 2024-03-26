import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css"; // Import styles
import DatePicker from "react-datepicker"; // Import datepicker
import "./attendance.css";

const Attendance = () => {
  // Sample data for demonstration
  const data = [
    { id: 1, studentID: 1, name: "John Doe" },
    { id: 2, studentID: 2, name: "Jane Smith" },
    { id: 3, studentID: 3, name: "Michael Johnson" },
    // Add more data as needed
  ];

  //side panel navigation

  // State to store attendance data and selected date
  const [attendanceData, setAttendanceData] = useState({
    date: new Date(),
    attendance: {},
  });

  // Function to handle radio button change
  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setAttendanceData((prevState) => ({
      ...prevState,
      attendance: {
        ...prevState.attendance,
        [name]: value,
      },
    }));
  };

  // Function to handle date change
  const handleDateChange = (date) => {
    setAttendanceData((prevState) => ({
      ...prevState,
      date: date,
    }));
  };

  // Function to handle submit button click
  const handleSubmit = () => {
    console.log("Attendance Data:", attendanceData);
    alert("Attendance submitted successfully!");
  };

  return (
    <>
      <div className="h-screen bg-blue-400 flex flex-col justify-center items-center ">
        <div className="bg-white p-5 w-full h-full lg:w-5/6 xl:w-5/6 flex flex-col justify-center items-center">
          <div className="flex justify-around items-center">
            <h4>Select Date</h4>
            <DatePicker
              className="w-full h-full bg-slate-200 border-1 p-2"
              selected={attendanceData.date}
              onChange={handleDateChange}
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          {/* Dynamic table */}
          <table className="mt-5">
            <thead>
              <tr>
                <th>Name</th>
                <th>Present</th>
                <th>Absent</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <input
                      type="radio"
                      name={`attendance_${item.id}`}
                      value="present"
                      onChange={handleRadioChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name={`attendance_${item.id}`}
                      value="absent"
                      onChange={handleRadioChange}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="border-2 text-4xl bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-24 rounded-full"
            onClick={handleSubmit}
          >
            Submit Attendance
          </button>
        </div>
      </div>
    </>
  );
};

export default Attendance;
