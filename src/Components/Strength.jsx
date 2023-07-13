import React from 'react'

const Strength = ({ value, sort }) => {
    return (
        <>
            <button onClick={sort}>Strength</button>
            <div className="card" id='card'>
                <img src={value.image?.url} alt={value.name} className="card-img-top"/>
                <h3>{value.name}</h3>
                <h4>Strength: {value.powerstats.strength}</h4>
            </div>

        </>

    )
}

export default Strength;