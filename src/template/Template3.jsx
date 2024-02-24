import React,{useContext} from 'react';
import {IcardContext} from '../Context/DataProvider.jsx';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS



const Template3=()=>{
  const imageUrl = 'https://cdn.pixabay.com/photo/2014/04/02/10/35/book-303927_640.png';
  const {obj} = useContext(IcardContext); // Import and destructure setAccount
   
return(
<div className="row">
      <div className="col-6" id="template1">
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
          <div style={{
            width: '350px', // Reduced the width
            borderRadius: '10px', // Smaller border radius
            paddingTop: '2%',
            backgroundColor: '#E5E4E2', // Orange
            overflow: 'hidden',
          }}>
            <div style={{backgroundColor:'#3F000F'}}>
            <div style={{
              fontFamily: 'Arial, sans-serif',
              color: '#3498DB', // Blue
              fontSize: '2rem',
              textAlign: 'center',
              padding: '2%',
              fontSize: '25px',
              display: 'flex',
              height:'100%'
            }}>
              <div style={{ width: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={imageUrl} style={{ width: '50px', height: '50px', marginLeft: '2%' }} />
              </div>
              Verbina Pre School

            </div>
            <p style={{
              fontFamily: 'Verdana, sans-serif',
              color: '#E74C3C', // Red
              textAlign: 'center',
              fontSize: '12px', // Increased font size
              marginLeft:'30%'
            }}>12 West Panshila Near StarClub Pansila Kolkata -700112 </p>
           </div>
           <div style={{
              color: '#D35400', // Orange
              textAlign: 'center',
              fontFamily: 'Tahoma, sans-serif',
              fontSize: '1.2rem', // Increased font size
              fontWeight: 'bold',
              paddingTop:'10%'

            }}>
              Identity Card
            </div>
          
            <div style={{
              
              height: '20%', // Reduced height
            

              paddingTop: '3%',
              paddingLeft: '5%',
              paddingRight: '2%',
              color: 'white',
              fontFamily: 'Calibri, sans-serif',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
             
            }}>
                <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '5%',
            }}>
              <div style={{
                backgroundColor: '#1E8449', // Green
                height: '100px', // Reduced height
                width: '100px', // Reduced width
                // borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <div style={{
                  height: '100px', // Reduced height
                  width: '100px', // Reduced width
                  overflow: 'hidden',
                  borderRadius: '50%',
                  padding:'2'
                }}>

    {/* <img src={obj.icardImage} alt="Student" style={{ width: '100%' }} />
   */}
                </div>
              </div>
            </div>
            
              <div style={{ width: '100%' }}>
              
              <ul className="details-list" style={{ marginTop: '5%', fontSize: '0.8rem' ,color:'black'}}>
                 <li> Name</li>
                 <li>Father name:</li>
                         <li>D.O.B:</li>
                         <li>Blood Group:</li>
                         <li>Contact No:</li>
                 
                       </ul>

              
              </div>
            
              
            </div>
            <div style={{
              color: '#D35400', // Orange
              
              fontFamily: 'Tahoma, sans-serif',
               // Increased font size
              
  
              width:'100%'
            }}>
             <div style={{fontSize: '0.6rem',fontWeight: 'bold',textAlign: 'right',marginTop: '10%',padding:'2%'}}
             >    <p style={{marginLeft:'60%',textAlign: 'center',color: 'black',fontFamily: 'Cedarville Cursive'}}>
              Amitava Roy
             </p>HEADMASTER'S SIGNATURE</div>
            </div>

            <div style={{width:'100%',paddingLeft:'5%',paddingRight:'5%',paddingBottom:'3%',marginBottom:'20%',fontFamily: 'Tahoma, sans-serif',color: '#D35400',}}><span><h4>Adress</h4></span>
            <p style={{ fontSize: '0.8rem', color: 'black' }}>
      Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678
    </p></div>
          </div>
        </div>
      </div>
    </div>
)



}
export default Template3;