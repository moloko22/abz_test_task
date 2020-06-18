import React, {Component} from 'react';

import {connect} from "react-redux";
import './RegisterForm.scss';

import '../../CustomCss/CustomFileInput.scss';
import {getPositions} from "../../store/actions/GetPosition";
import PositionList from "../../components/PositionsList/PositionsList";
import {registration} from "../../store/actions/registration";
import {getToken} from "../../store/actions/getToken";

class RegisterForm extends Component {
    formData = new FormData();
    onChangeInput = (e, id) =>{
        const name = e.target.name;
        const value = e.target.value;
        if(name === 'position_id'){
            this.formData.delete(name);
            this.formData.append(name, id);
            console.log(this.formData.getAll(name));
        }else if(name === 'photo'){
            this.formData.delete(name);
            this.formData.append(name, e.target.files[0]);
            console.log(this.formData.getAll(name));
        }else{
            this.formData.delete(name);
            this.formData.append(name, value);
            console.log(this.formData.getAll(name));
        }
        return this.formData;
    };
    componentDidMount() {
        this.props.getPositions();
    }
    async handleSubmit(e){
        e.preventDefault();
        await this.props.getToken();
        console.log(this.formData);
        return registration(this.formData, this.props.token);
    }
    render() {
        return (
            <div className={'registration_form'}>
                <form>
                    <div className={'form_first_block'}>
                        <div className={'form_name'}>
                            <label htmlFor="name">Name</label>
                            <input type="text"
                                   onChange={(e) => this.onChangeInput(e)}
                                   name={'name'}/>
                        </div>
                        <div className={'form_email'}>
                            <label htmlFor="email">Email</label>
                            <input type="email"
                                   onChange={(e) => this.onChangeInput(e)}
                                   name={'email'}/>
                        </div>
                        <div className={'form_phone'}>
                            <label htmlFor="phone_number">Phone number</label>
                            <input type="text"
                                   onChange={(e) => this.onChangeInput(e)}
                                   name={'phone'}/>
                            <span>Enter phone number is open format</span>
                        </div>
                        <PositionList positions={this.props.positions} onChangeInput={this.onChangeInput}/>
                        <div className={'form_photo'}>
                            <p>Photo</p>
                            <label className="file">
                                <input type="file"
                                       name={'photo'}
                                       onChange={(e) => this.onChangeInput(e)}
                                       id="file"
                                       aria-label="File browser example" />
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
const mapStateToProps = state => ({
    positions: state.positions,
    token: state.token,
});
const mapDispatchToProps = dispatch => ({
    getPositions: () => dispatch(getPositions()),
    getToken: () => dispatch(getToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);