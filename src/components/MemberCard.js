import React from 'react';
import "./MemberCard.css";

function MemberCard (props) {
    return (
        <div className='member-card'>
            <img src={props.photo} alt="member profile picture" />
            <h1 className='margin-10-member'>{props.name}</h1>
            <h3>{props.role}</h3>
        </div>
    );
}

export default MemberCard;