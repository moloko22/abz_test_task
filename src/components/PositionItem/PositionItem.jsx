import React from 'react';

import '../../CustomCss/CustomRadioInput.scss';
export default function PositionItem(props){
    return(
        <div className="radio">
            <input className={'custom-radio'}
                   type={'radio'}
                   id={`position-${props.elem.id}`}
                   name={'position_id'}
                   onClick={(e) => props.onChangeInput(e, props.elem.id)}
                   value={props.elem.name}
            />
            <label htmlFor={`position-${props.elem.id}`}>{props.elem.name}</label>
        </div>
    )
}