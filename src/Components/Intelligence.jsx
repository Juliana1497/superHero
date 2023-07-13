import React from 'react'

const Intelligence =({value}) =>{
    return (
        <div className="card" id='card'>
            <img src={value.image?.url} alt={value.name} className="card-img-top"/>
            <h3>{value.name}</h3>
            <h4>Intelligence: {value.powerstats.intelligence}</h4>
        </div>
    )
}

export default Intelligence;