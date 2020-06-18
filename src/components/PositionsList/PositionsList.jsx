import React from 'react';
import PositionItem from "../PositionItem/PositionItem";

function generatePositionItems(arr){
    return arr.map(elem => {
        return <PositionItem elem={elem}/>
    })
}
export default function PositionList(props){
    return (
        <div className={'form_position'}>
            <span>Select your position</span>
            {generatePositionItems(props.positions)}
        </div>
    )
}