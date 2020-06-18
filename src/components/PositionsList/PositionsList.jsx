import React from 'react';
import PositionItem from "../PositionItem/PositionItem";

function generatePositionItems(arr, func){
    return arr.map(elem => {
        return <PositionItem elem={elem} key={elem.id} onChangeInput={func}/>
    })
}
export default function PositionList(props){
    return (
        <div className={'form_position'}>
            <span>Select your position</span>
            {generatePositionItems(props.positions, props.onChangeInput)}
        </div>
    )
}