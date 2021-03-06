import React from 'react';

import './Banner.scss'
export default function Banner(){
    return (
        <div className={'banner'}>
            <div>
                <h1>Test assignment for frontend developer position</h1>
                <p>We kindly remind you that your test assignment should be submitted as a link to github/bitbucket
                    repository. Please be patient, we consider and respond to every application that meets minimum
                    requirements. We look forward to your submission. Good luck! The photo has to scale in the banner
                    area on the different screens
                </p>
                <a href="#registration">Sing up now</a>
            </div>
        </div>
    )
}