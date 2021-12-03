import React, {useState} from 'react';
import FormSignup from './FormSignup';
import FormSuccess from "./FormSuccess";
import "./Form.css";

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
    <>
    <div className="form-container-signup">
        <span className="close-btn">x</span>
        <div className="form-content-left">
            <img src="./images/img-2.svg" alt="spaceship" className="form-img" />
        </div>
    {!isSubmitted ? <FormSignup submitForm={submitForm}/> : alert("Welcome you as a new member!")}
    </div>
    </>
    
    );  
};

export default Form;
