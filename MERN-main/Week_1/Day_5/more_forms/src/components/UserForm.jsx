import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [firstnameError, setFirstnameError] = useState("");
    const [lastname, setLastname] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirm, setConfirm] = useState("");
    const [confirmError, setConfirmError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirm};
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };
    
    const handleFirstname = (e) => {
        setFirstname(e.target.value);
        if((e.target.value.length < 3)  && (e.target.value.length > 0)) {
            setFirstnameError("First Name must be at least 3 characters");
        } else {
            setFirstnameError("");
        }
    }

    const handleLastname = (e) => {
        setLastname(e.target.value);
        if((e.target.value.length < 3)  && (e.target.value.length > 0)) {
            setLastnameError("Last Name must be at least 3 characters");
        } else {
            setLastnameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if((e.target.value.length < 5)  && (e.target.value.length > 0)) {
            setEmailError("Email must be at least 5 characters");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if((e.target.value.length < 8)  && (e.target.value.length > 0)) {
            setPasswordError("Password must be at least 8 characters");
        } else {
            setPasswordError("");
        }
    }

    const handleConfirm = (e) => {
        setConfirm(e.target.value);
        if((e.target.value !== password ) && (e.target.value.length > 0)) {
            setConfirmError("Passwords must match");
        } else {
            setConfirmError("");
        }
    }

    return(
        <div>
        <form onSubmit={ createUser }>
            <div>
            {
            hasBeenSubmitted ? 
            <h3>Thank you for submitting the form!</h3> :
            <h3>Welcome, please submit the form.</h3> 
            }
            </div>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ handleFirstname } />
                {
                    firstnameError ?
                    <p style={{color:'red'}}>{ firstnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ handleLastname } />
                {
                    lastnameError ?
                    <p style={{color:'red'}}>{ lastnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="email" onChange={ handleEmail } />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ handlePassword } />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
                {
                    confirmError ?
                    <p style={{color:'red'}}>{ confirmError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ handleConfirm } />
            </div>
            <button>Create User</button>
        </form>
        </div>
    );
};
    
export default UserForm;
