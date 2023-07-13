import React from 'react'

const EyeColor =({value}) =>{
    return (
        <div className="card" id='card'>
            <img src={value.image?.url} alt={value.name} className="card-img-top"/>
            <h3>{value.name}</h3>
            <h4>Eye Color: {value.appearance.eyecolor}</h4>
        </div>
    )
}

export default EyeColor;