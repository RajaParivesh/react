import React, {Component} from "react";

class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                {this.props.data}
                &copy;{this.props.copyright}
            </React.Fragment>
        )
    }
}
export default Footer;