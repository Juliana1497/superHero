import React from 'react'

const HairColor =({value}) =>{
    return (
        <div className="card" id='card'>
            <img src={value.image?.url} alt={value.name} className="card-img-top"/>
            <h3>{value.name}</h3>
            <h4>Hair Color: {value.appearance.hairColor}</h4>
        </div>
    )
}

export default HairColor;