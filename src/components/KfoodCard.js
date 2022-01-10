import React from 'react'
import './KfoodCard.css'

function KfoodCard({id, title, date, desc, image}) {
    return (
        // box
        <div className="container-kfood-card kfood-card-width" onClick={() => window.location.href="/kfood/"+id}>
            <div className="flex justify-center overflow-hidden">
                <img className="image-kfood-card" src={image} />
            </div>
            <div className="margin-left-12px margin-right-12px margin-bottom-12px">
                <p className="margin-top-12px kfood-card-title-font bold">{title}</p>
                <p className="margin-top-12px detail-shortening kfood-card-detail-font">{desc}</p>
            </div>
        </div>
    )
}

export default KfoodCard