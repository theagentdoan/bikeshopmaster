export default function ValidateInfo (values){
    let errors = {}

    if(!values.usernameLogin){
        errors.username = "Username required"
    }
    //Email
    if(!values.email){
        errors.email = "Email required"
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)){
        errors.email = "Email address is invalid"
    }

    if(!values.passwordLogin){
        errors.password = "Password required"
    }
    else if(values.passwordLogin.length < 6){
        errors.password = "Password needs to be 6 characters or more";
    }

    if(!values.password2){
        errors.password2 = "Password required"
    }
    else if (values.password2 !== values.password){
        errors.password2 = "Passwords do not match"
    }
    return errors;
}