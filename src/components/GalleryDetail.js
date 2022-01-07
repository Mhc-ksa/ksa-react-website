import React from 'react'
import ImageGallery from 'react-image-gallery';
import './GalleryDetail.css'

function GalleryDetail({images}) {

    return (
        <div className="container-gallery-detail">
            <ImageGallery items={images} />
        </div>
    )
}

export default GalleryDetail