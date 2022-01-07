import React from 'react'
import './KslangPage.css'
import { KslangInfo } from '../components/KslangInfo'
import KslangCard from '../components/KslangCard'

function KslangPage() {
    return (
        <div className="width-70 padding-top-120">
            <div className='margin-bottom-100-kslang'>
                <h1>Korean Slang Library</h1>
                <div className='flex justify-start-kslang flex-wrap-kslang padding-15rem'>
                    {KslangInfo.map(card => 
                    <KslangCard key={card.id} id={card.id} photo={card.photo} name={card.name} />)}
                </div>
            </div>
        </div>
    )
}

export default KslangPage;