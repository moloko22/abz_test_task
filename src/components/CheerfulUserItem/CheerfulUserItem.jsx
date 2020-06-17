import React from 'react';

import './CheerfulUserItem.css';

export default function CheerfulUserItem (props){
    const {id, name, position, email, phone,photo} = props;
    const URLWITHPHOTO = 'https://cdn.icon-icons.com/icons2/1744/PNG/128/3643745-human-man-people-person-profile_113435.png';
    return (
        <li className={'user'}
        key={id}>
            <img src={`${photo || URLWITHPHOTO}`}
                 className={'user_photo'}
                 alt="user_image"/>
            <p className={'user_name'}>{name}</p>
            <p className={'user_position'}>{position}</p>
            <p className={'user_email'}>{email}</p>
            <p className={'user_phone'}>{phone}</p>
        </li>
    )
};
