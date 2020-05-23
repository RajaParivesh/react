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
                {/*<Footer/>*/}
            </React.Fragment>
        )
    }
}

export default App;
