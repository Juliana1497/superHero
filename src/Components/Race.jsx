import React from 'react'

const Race =({value}) =>{
    return (
        <div className="card" id='card'>
            <img src={value.image?.url} alt={value.name} className="card-img-top"/>
            <h3>{value.name}</h3>
            <h4>Race: {value.appearance.race}</h4>
        </div>
    )
}

export default Race;