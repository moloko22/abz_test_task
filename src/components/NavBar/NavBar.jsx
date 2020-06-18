import React from 'react';

import './NavBar.scss'
export default function NavBar() {
    return (
        <div className={'navbar'}>
            <div className={'logo'}></div>
            <nav>
                <ul>
                    <li><a href="/registration">About me</a></li>
                    <li><a href="/registration">Relationships</a></li>
                    <li><a href="/registration">Requirements</a></li>
                    <li><a href="/registration">Users</a></li>
                    <li><a href="/registration">Sign Up</a></li>
                </ul>
            </nav>
        </div>
    )
}
