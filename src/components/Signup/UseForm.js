import {useState, useEffect} from "react";

const UseForm = (Validate) => {
const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: ""
})

const [ errors, setErrors] = useState({})

const [isSubmitting, setIsSubmitting] = useState(false)

const handleChange = e => {
    const {name, value} = e.target
    setValues({
        ...values,
        [name]: value
    })
}

const handleSubmit = e => {
    e.preventDefault();
    // alert("abc")
    setErrors(Validate(values));
    setIsSubmitting(true);
}

// useEffect(() => {
//     if(Object.keys(errors).length === 0 && isSubmitting){
//         callback()
//     }

// }, [errors])

return {handleChange, values, handleSubmit, errors};
};

export default UseForm;
