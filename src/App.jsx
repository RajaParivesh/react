import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery"
import Login from "./components/Login"
import Error from "./components/Error"
import { BrowserRouter, Routes, Route} from "react-router-dom";

class App extends Component{
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home />} /> 
                    <Route path="about" element={<About />} /> 
                    <Route path="gallery" element={<Gallery />} /> 
                    <Route path="contact" element={<Contact />} />
                    <Route path="login" element={<Login />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer copyright={"Raja Parivesh"} data={"Footer data comming from the props "}/>
            </BrowserRouter>
        )
    }
}

export default App;
