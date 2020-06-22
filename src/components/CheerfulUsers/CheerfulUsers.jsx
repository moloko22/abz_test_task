import React, {Component} from 'react';

import {connect} from "react-redux";
import './CheerfulUsers.scss';

import CheerfulUsersHeader from "../CheerfulUsersHeader/CheerfulUsersHeader";
import CheerfulUsersList from "../CheerfulUsersList/CheerfulUsersList";
import {getUsers} from "../../store/actions/getUsers";

class CheerfulUsers extends Component {
    componentDidMount() {
        this.props.getUsers(this.props.nextUrl);
    }
    onClickHandle(){
        this.props.getUsers(this.props.nextUrl);
    }
    render() {
        return (
            <div className={'cheerful_users'}>
                <CheerfulUsersHeader/>
                <CheerfulUsersList list={this.props.usersList}/>
                <button onClick={() => this.onClickHandle()}>Show more</button>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    usersList: state.usersList,
    nextUrl: state.nextUrl,
});
const mapDispatchToProps = dispatch => ({
    getUsers: (nextUrl) => dispatch(getUsers(nextUrl)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheerfulUsers);