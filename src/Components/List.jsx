import React from 'react'

//Se trae desde el Dasboard la propiedad asignada en el mapeado para traer los datos especificos desde la API
const List =({value}) =>{
    return (
        <div className="card" id='cards'> 
            <img src={value.image?.url} alt={value.name} className="card-img-top"/>
            <h5 className="card-title">{value.name}</h5>
        </div>
    )
}

export default List;