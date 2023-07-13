import React, { useRef, useState } from "react";
import { RiSearchLine } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { fetchValues } from "../Store/Actions/Reducers/reduce";//se trae los valores desde el reducer

const Search = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');//Estado para guardar la información para filtrar la información
    const timeout = useRef(null);

    //función para buscar y filtrar la información
    function handleFetch({ target }) {
        setValue(target.value)

        clearTimeout(timeout.current)

        //asignar el tiempo en que se dispara automaticamente la accion de buscar por nombre
        timeout.current = setTimeout(() => {
            const name = value.toLocaleLowerCase()
            dispatch(fetchValues(`search/${name}`))
        }, 1000)
    };

    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search by name" aria-label="Search" value={value} onChange={handleFetch}/>
                            <button className="btn btn-outline-dark" type="submit" onClick={handleFetch}><RiSearchLine /></button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Search;