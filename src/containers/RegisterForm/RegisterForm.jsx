import React, {Component} from 'react';

import {connect} from "react-redux";
import './RegisterForm.scss';

import '../../CustomCss/CustomFileInput.scss';
import {getPositions} from "../../store/actions/GetPosition";
import PositionList from "../../components/PositionsList/PositionsList";

class RegisterForm extends Component {
    componentDidMount() {
        this.props.getPositions();
    }

    handleSubmit(e){
        e.preventDefault();
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
                        <PositionList positions={this.props.positions}/>
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
const mapStateToProps = state => ({
    positions: state.positions,
});
const mapDispatchToProps = dispatch => ({
    getPositions: () => dispatch(getPositions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);