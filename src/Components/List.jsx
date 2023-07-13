import React from 'react'

const List =({value}) =>{
    return (
        <div className="card" id='cards'> 
            <img src={value.image?.url} alt={value.name} className="card-img-top"/>
            <h5 className="card-title">{value.name}</h5>
        </div>
    )
}

export default List;