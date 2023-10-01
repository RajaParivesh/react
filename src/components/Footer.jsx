import React from "react";

const footer = (props) =>{
    return(
        <React.Fragment>
            <h1> Footer</h1>
            {props.data}
            &copy;{props.copyright}
        </React.Fragment>
    )
 }
export default footer;