import React from 'react';
import MemberCard from '../components/MemberCard';
import { MemberInfo } from '../components/MemberInfo';
import './AboutPage.css';

function AboutPage() {
    return (
        <div className='width-70 text-center-about'>
            <div>
                <h1 className='padding-top-120'>KSA</h1>
                <h3>Korean Student Association</h3>
                <h6>Mount Holyoke College</h6>
                <img className='img-center-about' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/800px-Flag_of_South_Korea.svg.png" alt="South Korea flag" width="300px"/>
            </div>

            <div className="about-part">
                <h2 className='margin-16-about'>Purpose</h2>
                <p className='text-align-about'>The purpose of KSA is to support those who identify as Korean and Korean-American and increase awareness of Korean culture both on and off campus. Additionally, we aim to help minorities establish their identities in America through spreading knowledge and cultural events.</p>
            </div>

            <div className="about-part">
                <h2 className='margin-16-about'>History</h2>
                <p className='text-align-about'>KSA is one of many cultural organizations in Mount Holyoke College. Though the origins of KSA is unclear, the earliest known record of KSA’s presence (as of April 2018) is 1999.
                    We are a cultural organization that has aimed to increase the awareness of Korean culture in the Mount Holyoke community and the Five College Area. We organize activities and events in order to foster unity and lifelong friendships among our members. Our events vary from educational to simply bonding. In a world that is becoming increasingly global, intercultural exchange is inevitable and we take it upon us to create environments that accurately portrays and spreads Korean culture.
                    KSA will not discriminate on the basis of religion, national origin, disability or sexual orientation. We only ask that you are willing to learn, respect, and celebrate Korean culture. 
                </p>
            </div>

            <div className='about-part'>
                <h2 className='margin-16-about'>Executive board</h2>
                <div className='flex-about justify-center-about'>
                    {MemberInfo.map( (member, index) => 
                        <MemberCard photo={member.photo} name={member.name} role={member.role} />
                    )}
                </div>
            </div>

            <div className='about-part'>
                <h2 className='margin-16-about'>Logo</h2>
                <img className='logo-image-about' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/800px-Flag_of_South_Korea.svg.png" alt="ksa logo" width="100px" />
                <img className='logo-image-about' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/800px-Flag_of_South_Korea.svg.png" alt="ksa logo" width="200px" />
                <img className='logo-image-about' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/800px-Flag_of_South_Korea.svg.png" alt="ksa logo" width="300px" />
            
            </div>
        </div>
    );
}

export default AboutPage;