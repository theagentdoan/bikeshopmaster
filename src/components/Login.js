import React from 'react';
import { useState } from 'react';
import FormLogin from './FormLogin';
import Homepage from './Homepage';



    // const [email, setEmail] = useState();
    // const [pass, setPass] = useState();
    // const [modalBox, setModalBox] = useState(false);
  
    // function inputInfo (event) {
     
    //   event.preventDefault();
    //   if (document.querySelector('.remember').checked){
    //     let info = JSON.parse(localStorage.getItem('info'));
    
    //     if (info == null) info = [{email: document.getElementById('email').value, pass: document.getElementById('pass').value}];
    //     else 
    //     // if ((email != '') && (pass != '')) 
    //     info.push({email: document.getElementById('email').value, pass: document.getElementById('pass').value});
    //     localStorage.setItem('info', JSON.stringify(info));
    //   }
    //   return;
      
      
    // };
   
    const Login = () => {
      const [isSubmitted, setIsSubmitted] = useState(false)

      function submitForm (){
        setIsSubmitted(true);
      }
      return (
        !isSubmitted ? <FormLogin submitForm={submitForm}/> : <Homepage/>
        )
    }
  
    
export default Login;
