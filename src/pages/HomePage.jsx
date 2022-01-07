import React from 'react'
import JoinNow from '../components/JoinNow'
import './HomePage.css'

function HomePage() {
    return (
        <>
            <div className="width-70">
                {/* 1. What is KSA? */}
                <div className="flex padding-top-80 space-btw">
                    <div>
                        <h2>What is KSA?</h2>
                        <p>Korean Student Association<br/>
                            KSA aims to provide a space for Korean and Korean American students<br/>
                            both on and off campus while spreading Korean culture to the community. </p>
                        <JoinNow />
                    </div>
                    <div>
                        <img alt="Seoul" width="300" src="https://shrm-res.cloudinary.com/image/upload/c_crop,h_705,w_1254,x_0,y_49/w_auto:100,w_1200,q_35,f_auto/v1/Global%20HR/Seoul1m_usakpg.jpg" />
                    </div>
                </div>
                
                {/* 2. Upcoming event */}
                <div>
                    <div>
                        <h2>Upcoming event</h2>
                    </div>
                    <div className="flex justify-center">
                        <div>
                            <img alt="Dalgona" width="300" src="data:image/jpeg;base64,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" />
                        </div>
                        <div>
                            <h2>Dalgona Night</h2>
                            <p>March 3rd (Sat) 2022 5-7pm<br/>
                                @ ACE House</p>
                            <p>We will make dalgona and play games!<br/>
                                We will make dalgona and play games!<br/>
                                Noting to bring</p>
                        </div>
                    </div>  
                </div>


                {/* 3. KSA Social Media */}
                <div>
                    <h2>KSA Social Media</h2>
                    <div className="flex justify-center">
                        <div>
                            <img alt="Facebook logo" height="80" src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" />
                        </div>
                        <div>
                        <img alt="Instagram logo" height="80" src="https://davidmeessen.com/wp-content/uploads/2020/09/ew-instagram-logo-transparent-related-keywords-logo-instagram-vector-2017-115629178687gobkrzwak.png" />
                        </div>
                    </div>
                </div>


                {/* 4. join us! */}
                <div className="flex justify-center">
                    <div>
                        <p>If you become KSA member,<br/>
                            You can get emails about KSA events and updates!</p>
                        <JoinNow /> 
                    </div>
                </div>
      
            </div>

        </>
    )
}

export default HomePage;