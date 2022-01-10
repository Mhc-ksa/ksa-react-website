import React from 'react'
import { KfoodItems } from '../components/KfoodItems';
import KfoodCard from '../components/KfoodCard';

import './KfoodPage.css'

function KfoodPage() {
    return (
            <>
            <div className="width-70 padding-top-120">
                <h1 className='kfood-title-font'>Korean Food Recipe</h1>
                <div className="flex flex-row-wrap justify-flex-start">
                    {/* Get data from KfoodItems, loop -> call KfoodCard function*/}
                    {KfoodItems.map((item, index) => {
                        return(
                            <div key={index} className="margin-right-24px">
                                {/* props: id, title, date, desc, image*/}
                                <KfoodCard
                                id={item.id}
                                title={item.title}
                                date={item.date}
                                desc={item.desc}
                                image={item.image}/>
                            </div>
                        )
                    })}
                </div>  
            </div>
        </>
    )
}

export default KfoodPage;