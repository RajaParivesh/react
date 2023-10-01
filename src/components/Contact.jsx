import React from "react";
import { useNavigate } from "react-router-dom";

const contact = () =>{
    const navigate = useNavigate();
    const goToHomePage = () =>{
        navigate('/')
    }
    const goBack = () =>{
        navigate(-1)
    }
    return(
        <React.Fragment>
            <div>
                <h1>Contact</h1>This is a Contact form.
                <form action="post"><input type="text" name="name" id="name" /></form>
            </div>
            <button onClick={goToHomePage}>Go to Home Page</button>
            <button onClick={goBack}>Go to Recent Back Page</button>
        </React.Fragment>
    )
}

export default contact;