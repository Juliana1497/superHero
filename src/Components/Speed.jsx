import React from 'react'

const Speed =({value}) =>{
    return (
        <div div className="card" id='card'>
            <img src={value.image?.url} alt={value.name} className="card-img-top"/>
            <h3>{value.name}</h3>
            <h4>Speed: {value.powerstats.speed}</h4>
        </div>
    )
}

export default Speed;