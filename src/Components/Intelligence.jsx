import React from 'react'

const Intelligence =({value}) =>{
    return (
        <div className="card" id='card'>
            <img src={value.image?.url} alt={value.name} className="card-img-top"/>
            <h3>{value.name}</h3>
            <p>Intelligence: {value.powerstats.intelligence}</p>
            <p>Strength: {value.powerstats.strength}</p>
            <p>Speed: {value.powerstats.speed}</p>
            <p>Durability: {value.powerstats.durability}</p>
            <p>Power: {value.powerstats.power}</p>
            <p>Combat: {value.powerstats.combat}</p>
            <p>Gender: {value.appearance.gender}</p>
            <p>Race: {value.appearance.race}</p>
            <p>Height: {value.appearance.height[0]}</p>
            <p>Weight: {value.appearance.weight[0]}</p>
            <p>Eye Color: {value.appearance.eyecolor}</p>
            <p>Hair Color: {value.appearance.hairColor}</p>
        </div>
    )
}

export default Intelligence;