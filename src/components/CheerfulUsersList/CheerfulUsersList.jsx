import React from 'react';

import CheerfulUserItem from "../CheerfulUserItem/CheerfulUserItem";
import './CheerfulUsersList.scss';
function CheerfulUsersList(props){
    const {list} = props;
    function generateList(arr){
        return arr.map(elem => {
            return CheerfulUserItem(elem)
        })
    }
    return (
        <div className={'users_list'}>{generateList(list)}</div>
    )
}
export default CheerfulUsersList;