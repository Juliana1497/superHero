import React from 'react'
import { useDispatch } from 'react-redux'

const List =({value}) =>{
    const dispatch = useDispatch()
    return (
        <li>
            <img src={value.image?.url} alt={value.name} />
            <h3>{value.name}</h3>
            <h4>Intelligence: {value.powerstats.intelligence}</h4>
            <h4>Strength: {value.powerstats.strength}</h4>
            <h4>Speed: {value.powerstats.speed}</h4>
        </li>
    )
}

export default List;