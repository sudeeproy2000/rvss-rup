import React,{useContext,useEffect} from 'react';

import { IcardContext } from '../Context/DataProvider';


const IdentityCard = () => {
  const imageUrl = 'https://cdn.pixabay.com/photo/2014/04/02/10/35/book-303927_640.png';
  const {icardimg} = useContext(IcardContext); // Import and destructure setAccount
   

  //  const {idcardtemplate } = useContext(IcardContext); // Import and destructure setAccount
 
  const {obj} = useContext(IcardContext); // Import and destructure setAccount
    

     const storedSchool = localStorage.getItem('school');
     const schoolData = JSON.parse(storedSchool);
     console.log(schoolData);
     console.log(icardimg);






  // Function to select an object by schoolName
  const selectObjectBySchoolName=()=>{
    const schoolName = obj.formData.school_name; // Assuming school name is stored in obj.formData
    return  schoolData.school_name=== schoolName?schoolData:null; // Return null if the school is not found

  
  };
  const schoolobj=selectObjectBySchoolName();

  


 const idcardtemplate=schoolobj.icard_template;


  console.log(idcardtemplate);
   






  return (
    <div
    style={{
      width: '100%', // Set the desired width
      height: '100%', // Set the desired height
      overflow: 'hidden', // Hide any content that overflows the container
     
    }}
  >
 {
 idcardtemplate==='template1'?
(   <div className="row">
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
        }}> {schoolData.school_name}</div>
        <p style={{
          fontFamily: 'Open Sans, sans-serif',
          color: 'white',
          textAlign: 'center'
        }}>{schoolData.school_address}</p>
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
            
    <img src={obj.icardImage} alt="Student" style={{ width: '100%' }} />


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
          {obj.formData.studentfname+" "+obj.formData.studentmname+" "+obj.formData.studentlname}
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
        <li>Father name:{obj.formData.guardianfname+" "+obj.formData.guardianlname}</li>
                         <li>D.O.B:{obj.formData.studentdob}</li>
                         <li>Blood Group:{obj.formData.studentbloodgrp}</li>
                         <li>Contact No:{obj.formData.guardianmob}</li>
                 
      <li>Adress:{obj.formData.studentadress}</li>
            </ul> 
             

          </div>
          <div style={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={schoolData.schoolFiles.image1_location} style={{ width: '70px', height: '70px', marginLeft: '60%' }} />
          </div>
        </div>
      </div>
    </div>
  </div>
 
          </div>
)
:idcardtemplate === 'template2' ? 

(   <div className="row">
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
        <img src={schoolData.schoolFiles.image1_location} style={{ width: '50px', height: '50px', marginLeft: '2%' }} />
      </div>            {schoolData.school_name}</div>
        <p style={{
          fontFamily: 'Verdana, sans-serif', // Changed font
          color: '#D35400', // Orange
          textAlign: 'center',
          fontSize:'12px'
        }}>{schoolData.school_address} </p>
        
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

    <img src={obj.icardImage} alt="Student" style={{ width: '100%' }} />

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
                   {obj.formData.studentfname+" "+obj.formData.studentmname+" "+obj.formData.studentlname}
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
        <li>Father name:{obj.formData.guardianfname+" "+obj.formData.guardianlname}</li>
                         <li>D.O.B:{obj.formData.studentdob}</li>
                         <li>Blood Group:{obj.formData.studentbloodgrp}</li>
                         <li>Contact No:{obj.formData.guardianmob}</li>
                 
      <li>Adress:{obj.formData.studentadress}</li>
            </ul> 
             
          </div>

        </div>
      </div>
    </div>
  </div>
   </div>)
:

    (<div className="row">
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
                <img src={schoolData.schoolFiles.image1_location} style={{ width: '50px', height: '50px', marginLeft: '2%' }} />
              </div>
              {schoolData.school_name}
            </div>
            <p style={{
              fontFamily: 'Verdana, sans-serif',
              color: '#E74C3C', // Red
              textAlign: 'center',
              fontSize: '12px', // Increased font size
              marginLeft:'30%'
            }}>{schoolData.school_address}</p>
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
            

              padding: '2%',
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
                height: '90px', // Reduced height
                width: '90px', // Reduced width
                // borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <div style={{
                  height: '100px', // Reduced height
                  width: '100px', // Reduced width
                  overflow: 'hidden',
                 border:"1px solid white",
                 backgroundColor: 'white',
                  padding:'2'
                }}>

         <img src={obj.icardImage} alt="Student" style={{ width: '100%' }} />

                </div>
              </div>
            </div>
            
              <div style={{ width: '100%' }}>
              
              <ul className="details-list" style={{ marginTop: '5%', fontSize: '0.8rem' ,color:'black'}}>
                 <li> Name:{obj.formData.studentfname+" "+obj.formData.studentmname+" "+obj.formData.studentlname}</li>
                 <li>Father name:{obj.formData.guardianfname+" "+obj.formData.guardianlname}</li>
                         <li>D.O.B:{obj.formData.studentdob}</li>
                         <li>Blood Group:{obj.formData.studentbloodgrp}</li>
                         <li>Contact No:{obj.formData.guardianmob}</li>
                 
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
              {obj.formData.teacher_name}
             </p>HEADMASTER'S SIGNATURE</div>
            </div>

            <div style={{width:'100%',padding:'3%',marginBottom:'20%',fontFamily: 'Tahoma, sans-serif',color: '#D35400',}}><span><h4>Adress</h4></span>
            <p style={{ fontSize: '0.8rem', color: 'black' }}>
     {obj.formData.studentadress}
    </p></div>
          </div>
        </div>
      </div>
    </div>
)


          }




  </div>
   

  );
}

export default IdentityCard;
