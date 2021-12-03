import React, {useState, useEffect} from "react";


const UseFormLogin = (validate) => {
const [values, setValues] = useState({
    usernameLogin: "",
    passwordLogin: ""
})

const [errors, setErrors] = useState({});

const [isSubmitting, setIsSubmitting] = useState(false);

const handleChange = e => {
    const {name, value} = e.target;
    setValues({
        ...values,
        [name]: value
    })
}

const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    if (document.querySelector('.remember').checked){
        let info = JSON.parse(localStorage.getItem('info'));
    
        if (info == null) info = [{email: document.getElementById('email').value, pass: document.getElementById('pass').value}];
        else 
        // if ((email != '') && (pass != '')) 
        info.push({email: document.getElementById('email').value, pass: document.getElementById('pass').value});
        localStorage.setItem('info', JSON.stringify(info));
      }
    //   return;
    
}


return {values, handleChange, handleSubmit, errors}
}

export default UseFormLogin;