import React from 'react';
import "./EventCard.css";

function EventCard (props) {

    return (
        <div className='event-card border-event'>
            <div className="container-event-image">
                <img src={props.photo} alt='event-photo' width="110%" />
            </div>

            <div>
                <h6 className="margin-top-12px margin-left-12px margin-right-12px">{props.place}{props.date.toDateString()} {props.time}</h6>
                <h3 className='margin-left-12px margin-bottom-12px margin-right-12px'>{props.name}</h3>
            </div>
        </div>
    );
}

export default EventCard;