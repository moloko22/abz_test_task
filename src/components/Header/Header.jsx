import React, {Component} from 'react';

import Banner from "../Banner/Banner";
import NavBar from "../NavBar/NavBar";
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <NavBar />
                <Banner />
            </header>
        );
    }
}

export default Header;