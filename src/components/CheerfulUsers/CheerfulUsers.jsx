import React, {Component} from 'react';

import './CheerfulUsers.scss';
import Users from '../../Users';
import CheerfulUsersHeader from "../CheerfulUsersHeader/CheerfulUsersHeader";
import CheerfulUsersList from "../CheerfulUsersList/CheerfulUsersList";

class CheerfulUsers extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: [],
        }
    }
    componentDidMount() {
        this.setState({
            list: Users,
        })
    }
    render() {
        return (
            <div className={'cheerful_users'}>
                <CheerfulUsersHeader/>
                <CheerfulUsersList list={this.state.list}/>
                <button>Show more</button>
            </div>
        );
    }
}

export default CheerfulUsers;