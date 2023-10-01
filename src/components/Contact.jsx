import React from "react";

const contact = () =>{
    return(
        <React.Fragment>
            <div>
                <h1>Contact</h1>This is a Contact form.
                <form action="post"><input type="text" name="name" id="name" /></form>
            </div>
        </React.Fragment>
    )
}

export default contact;