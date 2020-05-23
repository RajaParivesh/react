import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
// import Header from "./components/Header";

// class Header extends React.Component{
//     render() {
//         return (<p> This is header component</p>);
//     }
// }

class Footer extends Component{
    render() {
        return (
            <div>
                <h1>Footer</h1>
            </div>
        );
    }
}
class App extends Component{
    render() {
        return (
            <React.Fragment>
                <Header/>
                <p>This is a Body text</p>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default App;
