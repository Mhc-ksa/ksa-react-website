import React from 'react'
import GalleryCard from '../components/GalleryCard'
import { GalleryItems } from '../components/GalleryItems'

import './GalleryPage.css'

function GalleryPage() {
    return (
        <>
            <div className="width-70 container-gallery">
                <div>
                    {/* Get data from GalleryItems, loop -> call GalleryCard function*/}
                    {GalleryItems.map((item, index) => {
                        return(
                            <div key={index}>
                                {/* props: location, date, title, images*/}
                                <GalleryCard
                                location={item.location}
                                date={item.date}
                                title={item.title}
                                images={item.images}/>
                            </div>
                        )
                    })}
                </div>  
            </div>
        </>
    )
}

export default GalleryPage;