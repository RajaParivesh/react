import React, {Component} from "react";

class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <h1> Footer</h1>
                {this.props.data}
                &copy;{this.props.copyright}
            </React.Fragment>
        )
    }
}
export default Footer;