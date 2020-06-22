import React from 'react';

import './Registration.scss';
import RegistrationHeader from "../RegistrationHeader/RegistrationHeader";
import RegisterForm from "../../containers/RegisterForm/RegisterForm";

export default function Registration(){
    return (
        <div className={'registration'}>
            <div>
                <RegistrationHeader/>
                <RegisterForm/>
            </div>
        </div>
    )
}