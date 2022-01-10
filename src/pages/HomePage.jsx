import React from 'react'
import JoinNow from '../components/JoinNow'
import { EventInfo } from '../components/EventInfo';
import './HomePage.css'

function HomePage() {

    // upcoming event data
    const upcomingEvent = EventInfo.filter(event => {
        return event.date >= new Date();
    })
    const sortedUpcomingEvents = upcomingEvent.sort((a,b) => a.date - b.date)
    const closestUpcomingEvent = sortedUpcomingEvents[0]
    console.log(closestUpcomingEvent.name)


    return (
        <>
            <div className="width-70 home-container">
                {/* 1. What is KSA? */}
                <div className="flex padding-top-120 space-btw mobile-homepage">
                    <div className="home-mobile-pic mobile-justify-center">
                        <img alt="Seoul" width="360" src="https://shrm-res.cloudinary.com/image/upload/c_crop,h_705,w_1254,x_0,y_49/w_auto:100,w_1200,q_35,f_auto/v1/Global%20HR/Seoul1m_usakpg.jpg" />
                    </div>
                    <div className="home-mobile-padding-top-20">
                        <h2 className="mobile-justify-center">What is KSA?</h2>
                        <p className="home-margin-right-12px mobile-justify-center font-l home-text-margin-top bold">Korean Student Association</p>
                        <p className="home-margin-right-12px mobile-text-center mobile-justify-center font-m margin-top-8px margin-bottom-24px">KSA aims to provide a space for Korean and Korean American students
                            both on and off campus while spreading Korean culture to the community. </p>
                        <div className="mobile-justify-center">
                            <JoinNow />
                        </div>
                    </div>
                    <div className="home-pc-pic">
                        <img alt="Seoul" width="360" src="https://shrm-res.cloudinary.com/image/upload/c_crop,h_705,w_1254,x_0,y_49/w_auto:100,w_1200,q_35,f_auto/v1/Global%20HR/Seoul1m_usakpg.jpg" />
                    </div>
                </div>
                
                {/* 2. Upcoming event */}
                <div className="padding-top-40">
                    <div className="mobile-justify-center">
                        <h2>Upcoming event</h2>
                    </div>
                    <div className="flex justify-center margin-top-24px mobile-homepage">
                        <div className="mobile-justify-center home-margin-right-48px ">
                            <img className="mobile-justify-center" height="200px" width="360" alt="Dalgona" src={closestUpcomingEvent.photo} />
                        </div>
                        <div className="home-margin-left-48px home-mobile-padding-top-20">
                            <h2 className="mobile-justify-center">{closestUpcomingEvent.name}</h2>

                            <p className="mobile-justify-center margin-top-12px">{closestUpcomingEvent.date.toDateString()} {('0' + closestUpcomingEvent.date.getHours()).slice(-2)}:{('0' + closestUpcomingEvent.date.getMinutes()).slice(-2)}</p>
                            <p className="mobile-justify-center">@ {closestUpcomingEvent.place}</p>

                            <p className="mobile-justify-center mobile-text-center margin-top-12px font-m">{closestUpcomingEvent.desc}</p>
                        </div>
                    </div>  
                </div>


                {/* 3. KSA Social Media */}
                <div className="padding-top-40">
                    <h2>KSA Social Media</h2>
                    <div className="flex justify-center padding-top-40">
                        <div className="margin-right-24px cursor-pointer">
                            {/* TODO: change to facebook link */}
                            <a href="https://www.instagram.com/mhcksa/"><img alt="Facebook logo" height="80" src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" /></a>
                        </div>
                        <div className="margin-left-24px cursor-pointer">
                            <a href="https://www.instagram.com/mhcksa/"><img alt="Instagram logo" height="80" src="https://davidmeessen.com/wp-content/uploads/2020/09/ew-instagram-logo-transparent-related-keywords-logo-instagram-vector-2017-115629178687gobkrzwak.png" /></a>
                        </div>
                    </div>
                </div>

                {/* 4. join us! */}
                <div className="flex justify-center home-mobile-margin-top-40px">
                    <div>
                        <p className="home-font-default text-center margin-bottom-24px">If you become a KSA member,<br/>
                            You can get emails about KSA events and updates!</p>
                        <JoinNow /> 
                    </div>
                </div>
      
            </div>

        </>
    )
}

export default HomePage;