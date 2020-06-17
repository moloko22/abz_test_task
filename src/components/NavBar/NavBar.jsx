import React from 'react';

import './NavBar.css'
export default function NavBar() {
    return (
        <div className={'navbar'}>
            <div className={'logo'}></div>
            <nav>
                <ul>
                    <li>About me</li>
                    <li>Relationships</li>
                    <li>Requirements</li>
                    <li>Users</li>
                    <li>Sign Up</li>
                </ul>
            </nav>
        </div>
    )
}
