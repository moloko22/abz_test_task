import React from 'react';

import './Registration.scss';
import ScrollableAnchor from 'react-scrollable-anchor'
import RegistrationHeader from "../RegistrationHeader/RegistrationHeader";
import RegisterForm from "../../containers/RegisterForm/RegisterForm";

export default function Registration(){
    return (
        <div className={'registration'}>
            <ScrollableAnchor id={'registration'}>
                <div>
                    <RegistrationHeader/>
                    <RegisterForm/>
                </div>
            </ScrollableAnchor>

        </div>
    )
}