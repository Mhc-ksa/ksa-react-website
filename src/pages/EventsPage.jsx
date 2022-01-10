import React from 'react';
import "./EventsPage.css";
import { EventInfo } from '../components/EventInfo';
import EventCard from '../components/EventCard';

function EventsPage() {

    const upcomingEvent = EventInfo.filter(event => {
        return event.date >= new Date();
    })

    const pastEvent = EventInfo.filter(event => {
        return event.date < new Date();
    })

    return (
        <div className='width-70 padding-top-120'>
            <div className='margin-bottom-100-events'>
                <h1 className='events-title-font'>Upcoming Events</h1>
                <div className='flex-events justify-start-events padding-events'>
                    {upcomingEvent.sort((a,b) => a.date - b.date).map( (card) => 
                    <EventCard key={card.id} id={card.id} photo={card.photo} name={card.name} place={card.place} date={card.date}/>
                    )}
                </div>
            </div>

            <div>
                <h1 className='events-title-font'>Past Events</h1>
                <div className='flex-events justify-start-events padding-events opacity-events'>
                    {pastEvent.sort((a,b) => b.date - a.date).map( (card) => 
                    <EventCard key={card.id} photo={card.photo} name={card.name} place={card.place} date={card.date}
                     />
                    )}
                </div>
            </div>
        </div>
    )
}

export default EventsPage;