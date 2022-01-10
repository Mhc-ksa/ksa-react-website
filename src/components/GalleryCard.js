import React from 'react'
import GalleryDetail from './GalleryDetail'
import './GalleryCard.css'

function GalleryCard({location, date, title, images}) {

    const [isClicked, setIsClicked] = React.useState(false)

    function handleClick () {
        setIsClicked(!isClicked)
    }

    return (
        // box
        <div>
            <div className="flex container-gallery-card"> 
                {/* List data */}
                <div>
                    {/* TODO: data format rearrange */}
                    <p className="gallery-card-font-info">{location} | {date}</p>
                    <h2 className="gallery-card-font-title">{title}</h2>
                </div>
                {/* Arrow - up and down depends on isClicked */}
                <div className="arrow-gallery-card" onClick={handleClick}>
                    <i className={isClicked? 'fas fa-chevron-up' : 'fas fa-chevron-down'}></i>
                </div>
            </div>
            {/* Detail view: if the card is clicked */}
            <div className={isClicked? 'gallery-clicked' : 'gallery-not-clicked'}>
                <GalleryDetail images={images}/>
            </div>
        </div>
        
    )
}

export default GalleryCard