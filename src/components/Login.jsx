import React from "react";

const login = () =>{
    return(
        <React.Fragment>
            <div>
                <h1>Login</h1>
                <form action="post">
                    <input type="text" name="username" id="username" placeholder="Username"/>
                    <input type="text" name="password" id="password" placeholder="Password"/>
                    <input type="submit" value="Login" />
                </form>
            </div>
        </React.Fragment>
    )
}

export default login;