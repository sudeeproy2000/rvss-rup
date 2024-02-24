import React, { useState,useContext ,useEffect} from 'react';
import Logo from './assets/images/rvssGroup_white.png';
import 'admin-lte/plugins/fontawesome-free/css/all.min.css';
import 'admin-lte/plugins/daterangepicker/daterangepicker.js';
import 'admin-lte/dist/css/adminlte.min.css';
import 'admin-lte/dist/js/adminlte.min.js';


import { useNavigate } from "react-router-dom";
import { IcardContext } from './Context/DataProvider.jsx';


const AdminLteSchoolSuccessForm = (props) => {
  
   const {schoolData } = useContext(IcardContext);
   const {icardlogo } = useContext(IcardContext);
    
   const  { isUserLoggedIn} = useContext(IcardContext); 
  
   const navigate = useNavigate();
   const idcardtemplate=schoolData.icard_template;


  //  console.log(idcardtemplate);  
   console.log(schoolData);
  //  console.log(icardlogo);

   const imgurl=schoolData.schoolFiles.image1_location;
  console.log(imgurl);
  const date=new Date(schoolData.school_registration_date).toISOString();

   const handleSubmit = (e) => { e.preventDefault()}




   const [base64Image, setBase64Image] = useState('');

// ...

// Function to convert image to Base64
const getImageBase64 = async (url) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    throw error;
  }
};

// Use the function to get Base64-encoded image
useEffect(() => {
  const fetchImage = async () => {
    try {
      const base64Image = await getImageBase64(imgurl);
      setBase64Image(base64Image);
    } catch (error) {
      console.error('Error fetching image:', error);
      // Handle error, e.g., set a default image
      setBase64Image('https://cdn.pixabay.com/photo/2014/04/02/10/35/book-303927_960_720.png');
    }
  };

  fetchImage();
}, [imgurl]);






// Rest of your existing code...












    return (
      
    <body class="hold-transition sidebar-mini">
        <div class="wrapper">
           <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <ul class="navbar-nav">
               <li class="nav-item">
                  <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
               </li>
               <li class="nav-item d-none d-sm-inline-block">
                  <a href="../../index3.html" class="nav-link">Home</a>
               </li>
               <li class="nav-item d-none d-sm-inline-block">
                  <a href="#" class="nav-link">Contact</a>
               </li>
            </ul>
            <ul class="navbar-nav ml-auto">
               <li class="nav-item">
                  <a class="nav-link" data-widget="navbar-search" href="#" role="button">
                  <i class="fas fa-search"></i>
                  </a>
                  <div class="navbar-search-block">
                     <form class="form-inline">
                        <div class="input-group input-group-sm">
                           <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"></input>
                           <div class="input-group-append">
                              <button class="btn btn-navbar" type="submit">
                              <i class="fas fa-search"></i>
                              </button>
                              <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                              <i class="fas fa-times"></i>
                              </button>
                           </div>
                        </div>
                     </form>
                  </div>
               </li>
               <li class="nav-item dropdown">
                  <a class="nav-link" data-toggle="dropdown" href="#">
                  <i class="far fa-comments"></i>
                  <span class="badge badge-danger navbar-badge">3</span>
                  </a>
                  <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                     <a href="#" class="dropdown-item">
                        <div class="media">
                           <img src="../../dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle"></img>
                           <div class="media-body">
                              <h3 class="dropdown-item-title">
                                 Brad Diesel
                                 <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                              </h3>
                              <p class="text-sm">Call me whenever you can...</p>
                              <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                           </div>
                        </div>
                     </a>
                     <div class="dropdown-divider"></div>
                     <a href="#" class="dropdown-item">
                        <div class="media">
                           <img src="../../dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3"></img>
                           <div class="media-body">
                              <h3 class="dropdown-item-title">
                                 John Pierce
                                 <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                              </h3>
                              <p class="text-sm">I got your message bro</p>
                              <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                           </div>
                        </div>
                     </a>
                     <div class="dropdown-divider"></div>
                     <a href="#" class="dropdown-item">
                        <div class="media">
                           <img src="../../dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3"></img>
                           <div class="media-body">
                              <h3 class="dropdown-item-title">
                                 Nora Silvester
                                 <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                              </h3>
                              <p class="text-sm">The subject goes here</p>
                              <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                           </div>
                        </div>
                     </a>
                     <div class="dropdown-divider"></div>
                     <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
                  </div>
               </li>
               <li class="nav-item dropdown">
                  <a class="nav-link" data-toggle="dropdown" href="#">
                  <i class="far fa-bell"></i>
                  <span class="badge badge-warning navbar-badge">15</span>
                  </a>
                  <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                     <span class="dropdown-item dropdown-header">15 Notifications</span>
                     <div class="dropdown-divider"></div>
                     <a href="#" class="dropdown-item">
                     <i class="fas fa-envelope mr-2"></i> 4 new messages
                     <span class="float-right text-muted text-sm">3 mins</span>
                     </a>
                     <div class="dropdown-divider"></div>
                     <a href="#" class="dropdown-item">
                     <i class="fas fa-users mr-2"></i> 8 friend requests
                     <span class="float-right text-muted text-sm">12 hours</span>
                     </a>
                     <div class="dropdown-divider"></div>
                     <a href="#" class="dropdown-item">
                     <i class="fas fa-file mr-2"></i> 3 new reports
                     <span class="float-right text-muted text-sm">2 days</span>
                     </a>
                     <div class="dropdown-divider"></div>
                     <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
                  </div>
               </li>
               <li class="nav-item">
                  <a class="nav-link" data-widget="fullscreen" href="#" role="button">
                  <i class="fas fa-expand-arrows-alt"></i>
                  </a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                  <i class="fas fa-th-large"></i>
                  </a>
               </li>
            </ul>
           </nav>
           <aside class="main-sidebar sidebar-dark-primary elevation-4">
           <a href="http://rvssgroup.com/"class="brand-link">
              <img src={Logo} class="img-responsive" style={{ alignSelf: 'left' , marginRight: '120px'}}  />
           </a>
             <div class="sidebar">
             <div class="form-inline">
             <nav class="mt-2">
                  <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    

                     <li class="nav-header">MISCELLANEOUS</li>
                     <li class="nav-item">
                        <a href="../../iframe.html" class="nav-link">
                           <i class="nav-icon fas fa-ellipsis-h"></i>
                           <p>Tabbed IFrame Plugin</p>
                        </a>
                     </li>
                     <li class="nav-item">
                        <a href="https://adminlte.io/docs/3.1/" class="nav-link">
                           <i class="nav-icon fas fa-file"></i>
                           <p>Documentation</p>
                        </a>
                     </li>
                     <li class="nav-header">LABELS</li>
                     <li class="nav-item">
                        <a href="#" class="nav-link">
                           <i class="nav-icon far fa-circle text-danger"></i>
                           <p class="text">Important</p>
                        </a>
                     </li>
                     <li class="nav-item">
                        <a href="#" class="nav-link">
                           <i class="nav-icon far fa-circle text-warning"></i>
                           <p>Warning</p>
                        </a>
                     </li>
                     <li class="nav-item">
                        <a href="#" class="nav-link">
                           <i class="nav-icon far fa-circle text-info"></i>
                           <p>Informational</p>
                        </a>
                     </li>
                  </ul>
               </nav>
                 
               </div>
             </div>
           </aside>
         <div class="content-wrapper">
           
        <div className="card">
         
        <section class="content-header">
               <div class="container-fluid">
                  <div class="row mb-2">
                     <div class="col-sm-6">
                        <h1>School Registration Success </h1>
                     </div>
                     <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                           <li class="breadcrumb-item"><a href="javascript:appStudent()">Home</a></li>
                           <li class="breadcrumb-item"><a href="appStudent"></a>Student Form</li>
                           
                        </ol>
                     </div>
                  </div>
               </div>
            </section>
            <section class="content">
        <div class="container-fluid">
        <div class="row">
        <div class="col-md-6">
        <div className="card-body">
        <div class="card card-primary">
           <div class="card-header">
            <h3 class="card-title">School Details</h3>
          </div>
          <form onSubmit={handleSubmit}>
          <div className="form-group" color="#GEGEGE">
          <label htmlFor="inputName">School Id is: {schoolData.school_id}  </label>
            </div>
            <div className="form-group">
              <label htmlFor="inputName">School Name is: {schoolData.school_name} </label>
              
              <script>
                 //alert("school name");
              </script>
            </div>
            <div className="form-group">

              <label htmlFor="inputName">Date of Registration: {date.split('T')[0]}</label>
              
            </div>
            <div className="form-group">
              <label htmlFor="inputName">School Address: {schoolData.school_address}  </label>
              
            </div>
            <div className="form-group">
              <label htmlFor="inputName">School City: {schoolData.school_city}  </label>
              
            </div>
            <div class="form-group">
            
                     <label>State {schoolData.school_state}  </label>                    
            </div>
            <div className="form-group">
              <label htmlFor="inputName">Pincode: {schoolData.school_pincode}  </label>
              
            </div>
<div class="row">
    <div class="col-12 col-sm-6">
       <div className="form-group">
              <label htmlFor="inputName">School Phone Number 1: {schoolData.phones.mobile_number}</label>
              <div class="input-group-prepend">
                       <span class="input-group-text"><i class="fas fa-phone"></i></span>
                        
              </div>
              
       </div>
       <div className="form-group">
              <label htmlFor="inputName">School Phone Number 2: {schoolData.phones.fax}  </label>
              <div class="input-group-prepend">
              <span class="input-group-text"><i class="fas fa-phone"></i></span>
              
              </div>
        </div>
    </div>
</div>

            
            <div className="form-group">
              <label htmlFor="inputEmail">School Admin Email: {schoolData.school_adminEmail}   </label>
              <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-envelope"></i></span>
              </div>
              
            </div>
        <div class="card card-primary">
        <div class="card-header">
            <h3 class="card-title">Principal Details </h3>
        </div> 
        <div class="form-group">
                     <label>Salutation: {schoolData.principal.salutation}  </label>
        </div>
        <div className="form-group">
              <label htmlFor="inputName">Principal Name:  {schoolData.principal.name}   </label>
        </div>
        <div className="form-group">
             
              <label htmlFor="inputName">Principal Mobile Number: {schoolData.principal.phones.mobile_number}  </label>
              
              <div class="input-group-prepend">
              <span class="input-group-text"><i class="fas fa-phone"></i></span>
              </div>
       </div>
        <div className="form-group">
              <label htmlFor="inputEmail">Principal Email: {schoolData.principal.email}  </label>
              <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-envelope"></i></span>
              </div>
        </div>
        
       
        </div>
             <button type="button" class="btn btn-block btn-success btn-sm">Success</button>
             <div>
      {isUserLoggedIn ? (
        // Show the "Edit" button when the user is logged in
        <button type="button" className="btn btn-block btn-success btn-sm" onClick={()=>navigate(`/school/schoolSuccess/edit`)}>Edit</button>
      ) : (
        // Show the "Back" button when the user is not logged in
        <>
          <button type="button" className="btn btn-block btn-info btn-sm" style={{ backgroundColor: '#3498db' }}
          onClick={()=>navigate(`/school`)}>
            Back
          </button>
         
        </>
      )}
    </div>
          </form>
        </div>
        </div>
        </div>
        <div class="col-md-6">
        <div class="card card-primary">
        <div class="card-header" >
            <h3 class="card-title">Image Upload</h3>

        </div>
        <div class="form-group">
           <label htmlFor="inputName">ICard Template For School</label>
            <div className="wrapper"style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'25px',width:'650px'}}>
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
  height: '100%',
  width: '100%',
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
    }}>            {schoolData.school_name}</div>
    <p style={{
      fontFamily: 'Open Sans, sans-serif',
      color: 'white',
      textAlign: 'center'
    }}>{schoolData.school_address} </p>
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
        
 {/* <img src={schoolData.schoolFiles.image1_id} alt="Student" style={{ width: '100%' }} />
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
      {base64Image && (
  <img src={base64Image} alt="School Logo" style={{ width: '100%' }} />
)}
      </div>
    </div>
  </div>
</div>
</div>

      </div>
)
:idcardtemplate === 'template2' ? 

( 
    <div className="row">
<div className="col-6" id="template2">
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
      padding: '5%',
      fontSize:'25px',
      display:'flex'
    }}><div style={{ width: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center',marginRight:'3%' }}>
        {base64Image && (
  <img src={base64Image} alt="School Logo" style={{ width: '100%' }} />
)}
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

{/* <img src={obj.icardImage} alt="Student" style={{ width: '100%' }} /> */}

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
</div>)
:

(
<div className="row">
  <div className="col-6" id="template3">
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',

    }}>
      <div style={{
        width: '350px', // Reduced the width
        borderRadius: '2px', // Smaller border radius
        paddingTop: '2%',
        paddingLeft:'2%',
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
          <div style={{ width: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center',paddingLeft:'2%',paddingRight:'2%' }}>
          {base64Image && (
  <img src={base64Image} alt="School Logo" style={{ width: '100%' }} />
)}
          </div>
            {schoolData.school_name}

        </div>
        <p style={{
          fontFamily: 'Verdana, sans-serif',
          color: '#E74C3C', // Red
          textAlign: 'center',
          fontSize: '12px', // Increased font size
          marginLeft:'30%',
          paddingBottom:'2px',
          paddingRight:'5px'
        }}>{schoolData.school_address} </p>
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
            
              padding:'3'
            }}>

    {/* <img src={obj.icardImage} alt="Student" style={{ width: '100%' }} /> */}

            </div>
          </div>
        </div>
        
          <div style={{ width: '100%' }}>
          
          <ul className="details-list" style={{ marginTop: '5%', fontSize: '0.8rem' ,color:'black'}}>
             <li> Name:</li>
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
          Amitava Ghosh
         </p>HEADMASTER'S SIGNATURE</div>
        </div>

        <div style={{width:'100%',padding:'3%',marginBottom:'20%',fontFamily: 'Tahoma, sans-serif',color: '#D35400',}}><span><h4>Adress</h4></span>
        <p style={{ fontSize: '0.8rem', color: 'black' }}>
 {/* {obj.formData.studentadress} */}
 Moharajpur,Gangarampur,D.Dinajpur
</p></div>
      </div>
    </div>
  </div>
</div>
)


      }









           
          </div>
            </div>
         </div>
        </div>
     <div>


       
        </div>
        </div>
        </div>
        </div>
        </section>  
         <footer class="main-footer">
            <div class="float-right d-none d-sm-block">
               <b>Version</b> 3.2.0
            </div>
            <strong>Copyright &copy; 2014-2023 <a href="http://rvssgroup.com/">RVSS</a>.</strong> All rights reserved.
         </footer>
         <aside class="control-sidebar control-sidebar-dark">
         </aside>
    </div>
    </div>
    </div>
      <script src="../../plugins/jquery/jquery.min.js"></script>
      <script src="../../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="../../plugins/select2/js/select2.full.min.js"></script>
      <script src="../../plugins/bootstrap4-duallistbox/jquery.bootstrap-duallistbox.min.js"></script>
      <script src="../../plugins/moment/moment.min.js"></script>
      <script src="../../plugins/inputmask/jquery.inputmask.min.js"></script>
      <script src="../../plugins/daterangepicker/daterangepicker.js"></script>
      <script src="../../plugins/bootstrap-colorpicker/js/bootstrap-colorpicker.min.js"></script>
      <script src="../../plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"></script>
      <script src="../../plugins/bootstrap-switch/js/bootstrap-switch.min.js"></script>
      <script src="../../plugins/bs-stepper/js/bs-stepper.min.js"></script>
      <script src="../../plugins/dropzone/min/dropzone.min.js"></script>
      <script src="../../dist/js/adminlte.min.js?v=3.2.0"></script>
      <script src="../../dist/js/demo.js"></script>
      <script>
         function render(){
              }
      </script>
      <script>
         window.onload = function () {
         }
   </script>
   </body>
    );
  }
  
  export default AdminLteSchoolSuccessForm;
  


