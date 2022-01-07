import React from 'react'
import './KfoodCard.css'

function KfoodCard({id, title, date, desc, image}) {
    return (
        // box
        <div className="container-kfood-card" onClick={() => window.location.href="/kfood/"+id}>
            <div className="flex justify-center overflow-hidden">
                <img className="image-kfood-card" src={image} />
            </div>
            <div className="margin-left-12px margin-right-12px margin-bottom-12px">
                <p className="margin-top-12px bold">{title}</p>
                <p className="margin-top-12px font-s detail-shortening">{desc}</p>
            </div>
        </div>
    )
}

export default KfoodCard