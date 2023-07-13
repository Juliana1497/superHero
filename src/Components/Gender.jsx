import React from 'react'

const Gender =({value}) =>{
    return (
        <div className="card" id='card'>
            <img src={value.image?.url} alt={value.name} className="card-img-top"/>
            <h3>{value.name}</h3>
            <h4>Gender: {value.appearance.gender}</h4>
        </div>
    )
}

export default Gender;