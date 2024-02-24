import React,{useContext} from 'react';
import {IcardContext} from '../Context/DataProvider.jsx';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS











const Template2=()=>{
  const imageUrl = 'https://cdn.pixabay.com/photo/2014/04/02/10/35/book-303927_640.png';
  const {obj} = useContext(IcardContext); // Import and destructure setAccount
   
return(
  <div className="row">
  <div className="col-6" id="template1">
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
    }}>
      <div style={{
        width: '400px',
        borderRadius: '12px',
        paddingTop: '2%',
        backgroundColor: '#E5E4E2', // Golden Yellow
        overflow: 'hidden',
        
      }}>
        <div style={{
          fontFamily: 'Arial, sans-serif', // Changed font
          color: '#1E8449', // Green
          fontSize: '2rem',
          textAlign: 'center',
          padding: '2%',
          fontSize:'25px',
          display:'flex'
        }}><div style={{ width: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={imageUrl} style={{ width: '50px', height: '50px', marginLeft: '2%' }} />
      </div>Verbina Pre School</div>
        <p style={{
          fontFamily: 'Verdana, sans-serif', // Changed font
          color: '#D35400', // Orange
          textAlign: 'center',
          fontSize:'12px'
        }}>12 West Panshila Near StarClub Pansila Kolkata -700112 </p>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '5%'
        }}>
          <div style={{
            backgroundColor: '#E74C3C', // Red
            height: '140px',
            width: '140px',
            borderRadius: '10%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              height: '120px',
              width: '120px',
              overflow: 'hidden',
              borderRadius: '50%'
            }}>

    {/* <img src={obj.icardImage} alt="Student" style={{ width: '100%' }} />
   */}
            </div>
          </div>
        </div>
        <div style={{
          color: '#3498DB', // Blue
          textAlign: 'center',
          fontFamily: 'Tahoma, sans-serif', // Changed font
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginTop: '2%'
        }}>
                    Akash Kumar Sinha
        </div>
        <div style={{
          backgroundColor: '#033E3E', // Purple
          height: '28%',
          marginTop: '10%',
          border: '10%',
          padding: '7%',
          color: 'white',
          fontFamily: 'Calibri, sans-serif', // Changed font
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderTop: '5px solid white'
        }}>
          <div style={{ width: '100%' }}>
        <ul className="details-list" style={{ marginTop: '2%', fontSize: '0.8rem' }}>
      <li>Father name:</li>
              <li>D.O.B:</li>
              <li>Blood Group:</li>
              <li>Contact No:</li>
      <li>Adress:</li>
            </ul> 
             
          </div>

        </div>
      </div>
    </div>
  </div>
</div>



)



}
export default Template2;