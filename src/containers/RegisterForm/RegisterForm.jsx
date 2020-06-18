import React, {Component} from 'react';

import './RegisterForm.scss';
import '../../CustomCss/CustomRadioInput.scss';
import '../../CustomCss/CustomFileInput.scss';
class RegisterForm extends Component {
    handleSubmit(e){
        e.preventDefault();
        console.log(e);
    }
    render() {
        return (
            <div className={'registration_form'}>
                <form action="/">
                    <div className={'form_first_block'}>
                        <div className={'form_name'}>
                            <label htmlFor="name">Name</label>
                            <input type="text" name={'name'}/>
                        </div>
                        <div className={'form_email'}>
                            <label htmlFor="email">Email</label>
                            <input type="email" name={'email'}/>
                        </div>
                        <div className={'form_phone'}>
                            <label htmlFor="phone_number">Phone number</label>
                            <input type="text" name={'phone_number'}/>
                            <span>Enter phone number is open format</span>
                        </div>
                        <div className={'form_position'}>
                            <span>Select your position</span>
                            <div>
                                <div className="radio">
                                    <input className="custom-radio" type="radio" id="position-1" name="position" value="Frontend developer"/>
                                    <label htmlFor="position-1">Frontend developer</label>
                                </div>
                                <div className="radio">
                                    <input className="custom-radio" type="radio" id="position-2" name="position" value="Backend developer"/>
                                    <label htmlFor="position-2">Backend developer</label>
                                </div>
                                <div className="radio">
                                    <input className="custom-radio" type="radio" id="position-3" name="position" value="Designer"/>
                                    <label htmlFor="position-3">Designer</label>
                                </div>
                                <div className="radio">
                                    <input className="custom-radio" type="radio" id="position-4" name="position" value="QA" />
                                    <label htmlFor="position-4">QA</label>
                                </div>
                            </div>
                        </div>
                        <div className={'form_photo'}>
                            <p>Photo</p>
                            <label className="file">
                                <input type="file" id="file" aria-label="File browser example" />
                                    <span className="file-custom"></span>
                            </label>
                        </div>
                    </div>
                    <div className={'form_second_block'}>
                        <button type={'submit'}
                                onClick={(e) => this.handleSubmit(e)}>Sign up now</button>
                    </div>
                </form>
            </div>

        );
    }
}

export default RegisterForm;