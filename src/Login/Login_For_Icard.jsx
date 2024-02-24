import React, { useState,useContext ,useEffect} from 'react';
import Logo from '../assets/images/rvssGroup_white.png';
import 'admin-lte/plugins/fontawesome-free/css/all.min.css';
import 'admin-lte/plugins/daterangepicker/daterangepicker.js' ;
import 'admin-lte/dist/css/adminlte.min.css';
import 'admin-lte/dist/js/adminlte.min.js';

import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import {IcardContext} from '../Context/DataProvider.jsx';


const Login_For_Icard =(props) => {
   const handleSubmit = (e) => { e.preventDefault()}
   const [selectedRole, setSelectedRole] = useState('Sign in as a school');
   const navigate = useNavigate();
 
   const  { isUserLoggedIn, setIsUserLoggedIn} = useContext(IcardContext); 
   const  { userLoggedInEmail, setUserLoggedInEmail} = useContext(IcardContext); 
   const {setSchoolData } = useContext(IcardContext);
  
  
   const storedData = JSON.parse(localStorage.getItem('school'));
  console.log(storedData)
      
     

   const handleGoogleLogin = (response) => {
     
      
      
    
      if (selectedRole === 'Sign in as a school') {
        // Check if the user has completed registration
        if (storedData.school_adminEmail === response.email) {
         setIsUserLoggedIn(true)
         setUserLoggedInEmail(response.email);
          // User has completed registration
         //  navigate('/schoolsuccess'); // Navigate to the school success page



      //  I have to implement this when real database work
           // const matchingObject = storedData.find(obj => obj.school_adminEmail === userLoggedInEmail);
      const matchingObject=storedData;

       setSchoolData(matchingObject)
       


         navigate(`/school/schoolSuccess`)
        } else {
          // User has not completed registration
          navigate('/school', { state: { error: 'Please complete your registration first', color: 'red' } }); // Navigate to the school page with an error message
        }
      } else {
        navigate('/student'); // Navigate to the student route
      }
    };
    
 
   const handleRadioChange = (event) => {
     setSelectedRole(event.target.value);
   };
 
   const radioLabelStyle = {
    color: 'blue', // Change the color to your preference
    fontSize: '18px', // Change the font size to your preference
  };
 








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
           
           </nav>
           <aside class="main-sidebar sidebar-dark-primary elevation-4" >
           <a href="http://rvssgroup.com/"class="brand-link">
              <img src={Logo} class="img-responsive" style={{ alignSelf: 'left' , marginRight: '120px'}}  />
           </a>
             <div class="sidebar" style={{height:'100vh'}}>
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
           <section class="content-header" style={{marginBottom:'5%'}}>
           <h1 style={{textAlign:'center',color: 'purple',
    fontSize: '36px', 
    fontWeight: 'bold'}}>Complete Your Sign in</h1>
          
           </section>
           <section class="content">
            <div className="container-fluid">
            <div>
      <div style={{textAlign:'center'}}>
      <label>
                <input
                  type="radio"
                  value="Sign in as a parent"
                  checked={selectedRole === 'Sign in as a parent'}
                  onChange={handleRadioChange}
                />
                <span style={radioLabelStyle}>Sign in as a parent</span>
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  value="Sign in as a school"
                  checked={selectedRole === 'Sign in as a school'}
                  onChange={handleRadioChange}
                />
                <span style={radioLabelStyle}>Sign in as a school</span>
              </label>
      </div>
      <div style={{display:'flex',justifyContent:'center'}}>

      <GoogleOAuthProvider clientId="641307203075-i743uim30a02c0ttbs92rd9p25pu6p01.apps.googleusercontent.com" style={{mt:2}}>

<GoogleLogin
theme="filled_blue"
shape="circle"
onSuccess={credentialResponse => {

  var decoded = jwt_decode(credentialResponse.credential);

  handleGoogleLogin(decoded);
// console.log(decoded);

  }}
  onError={() => {
console.log('Login Failed');
  }}
 useOneTap
  />


</GoogleOAuthProvider>
    </div>


      </div>




            </div>


           </section>

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
  
  export default Login_For_Icard;
  


















