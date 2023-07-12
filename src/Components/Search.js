import React, { useRef, useState } from "react";
import {RiSearchLine} from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { fetchValues } from "../Store/Actions/Reducers/reduce";

const Search = () =>{
    const dispatch = useDispatch();
    const[value, setValue] = useState('');
    const timeout = useRef(null);

    function handleFetch ({target}){
        setValue(target.value)

        clearTimeout(timeout.current)

        timeout.current = setTimeout(() => {
            const name = value.toLocaleLowerCase()
            dispatch(fetchValues(`search/${name}`))
        }, 1000)
    }
    return(
        <div>
            <input type="text" placeholder="Search by name" value={value} onChange={handleFetch} />
            <div onClick={handleFetch}>
                <RiSearchLine />
            </div>
        </div>
    )
}

export default Search;