import React,{useContext} from 'react';
import {IcardContext} from '../Context/DataProvider.jsx';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS





const Template1=()=>{
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
        backgroundColor: '#0f3460',
        overflow: 'hidden'
      }}>
        <div style={{
          fontFamily: 'Gilroy',
          color: 'white',
          fontSize: '2rem',
          textAlign: 'center',
          padding: '2%'
        }}>Verbina Pre School</div>
        <p style={{
          fontFamily: 'Open Sans, sans-serif',
          color: 'white',
          textAlign: 'center'
        }}>12 west Panshila Near StarClub Pansila Kolkata -700112 </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '5%'
        }}>
          <div style={{
            backgroundColor: '#e94560',
            height: '140px',
            width: '140px',
            borderRadius: '50%',
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
            
    {/* // <img src={obj.icardImage} alt="Student" style={{ width: '100%' }} />
 */}

            </div>
          </div>
        </div>
        <div style={{
          color: 'white',
          textAlign: 'center',
          fontFamily: 'Gilroy',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginTop: '2%'
        }}>
          Akash Kumar Sinha
        </div>
        <div style={{
          backgroundColor: '#e94560',
          height: '28%',
          marginTop: '10%',
          borderTopLeftRadius: '75px',
          padding: '7%',
          color: 'white',
          fontFamily: 'Open Sans, sans-serif',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderTop: '5px solid white'
        }}>
          <div style={{ width: '50%' }}>
        <ul className="details-list" style={{ marginTop: '2%', fontSize: '0.8rem' }}>
      <li>Father name:</li>
              <li>D.O.B:</li>
              <li>Blood Group:</li>
              <li>Contact No:</li>
      <li>Adress:</li>
            </ul> 
             

          </div>
          <div style={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={ imageUrl} style={{ width: '70px', height: '70px', marginLeft: '60%' }} />
          </div>
        </div>
      </div>
    </div>
  </div>
 
          </div>



)



}
export default Template1;