import React from 'react'

const Weight =({value}) =>{
    return (
        <div className="card" id='card'>
            <img src={value.image.url} alt={value.name} className="card-img-top"/>
            <h3>{value.name}</h3>
            <h4>Weight: {value.appearance.weight[0]}</h4>
        </div>
    )
}

export default Weight;