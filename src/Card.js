import React from 'react';

const Card = (props)=>{
    
    // const {name, address:{geo:{lat:age,lng:powerLevel}}} = props.props;
    const {name, age, powerLevel} = props.props;
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img src={`https://robohash.org/${name}?set=set4`} alt={`${name}'s Pic`} />
            <div>
                <h2>{name}</h2>
                <p>{`Age : ${age}`}</p>
                <p>{`Power Level : ${powerLevel}`}</p>
            </div>



        </div>
    
    );
};

export default Card; 