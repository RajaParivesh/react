import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component{
    render() {
        return (
            <React.Fragment>
                <Header/>
                {/*<p>This is a Body text</p>*/}
                <Footer copyright={"Raja Parivesh"} data={"footer data comming from the props"}/>
            </React.Fragment>
        )
    }
}

export default App;
