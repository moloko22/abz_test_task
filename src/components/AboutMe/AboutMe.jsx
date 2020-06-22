import React from 'react';

import './AboutMe.scss';
export default function AboutMe(){
    return (
        <div className={'about_me'}>
            <h1>Let's get acquainted</h1>
            <div className={'about_me_info'}>
                <div></div>
                <div>
                    <h2>I am cool frontend developer</h2>
                    <p>We will evaluate how clean your approach to writing CSS and Javascript code is.
                        You can use any CSS and Javascript 3rd party libraries without any restriction.

                    </p>
                    <p>
                        If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you
                        will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well.
                        Slice service directory page P​SD mockup​ into HTML5/CSS3.
                    </p>
                    <a href="#">Sign up now</a>
                </div>
            </div>
        </div>
    )
}