import React from 'react';
import "./MemberCard.css";

function MemberCard (props) {
    return (
        <div className='member-card'>
            <img className='width-100-member' src={props.photo} alt="member profile picture" />
            <p className='margin-10-member member-card-name-font'>{props.name}</p>
            <p className='member-card-role-font'>{props.role}</p>
        </div>
    );
}

export default MemberCard;