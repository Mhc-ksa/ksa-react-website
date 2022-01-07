import React from 'react';
import './KslangCard.css';

function KslangCard (props) {
    return (
        <div className='kslang-card border-kslang width-260px height-260px overflow-hidden' onClick={() => window.location.href='/kslang/'+props.id}>
            <div className='flex justify-center'>
                <img src={props.photo} alt='kslang photo' width="100%" />
            </div>
        </div>
        );
}

export default KslangCard;