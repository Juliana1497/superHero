import React, { useEffect, useState } from 'react';
import Search from './Search';
import List from './List';
import Sort from './Sort';
import { fetchValues } from '../Store/Actions/Reducers/reduce';
import { useDispatch, useSelector } from 'react-redux';

const Dashboard = () =>{
    
    const [sorted, setSorted] = useState({ sorted: "name", reversed: false });
    const dispatch = useDispatch();
    const {data, loading} = useSelector(state => state.values)
    const [values, setUsers] = useState([...data]);
    const [order, setOrder] = useState("ASC");

    
    useEffect(()=>{
        dispatch(fetchValues('search/m'))
    },[dispatch]);

    if (loading) return <p>Loading...</p>
    const sliced = data.slice(0,-1)

    /*const sorting = (col) => {
        //ordenar de manera ascendente
        if (order === "ASC") {
          const sorted = [...data].sort((a, b) =>
            a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
          );
    
          setUsers(sorted);
          setOrder("DSC");
          console.log(sorted);
        }
        //ordenar de manera descendente
        if (order === "DSC") {
          const sorted = [...data].sort((a, b) =>
            a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
          );
    
          setUsers(sorted);
          setOrder("ASC");
          console.log(sorted);
        }
      };*/


    const sortByIntelligence = (col) => {
        setSorted({ sorted: "powerstats", reversed: !sorted.reversed });
    
        const usersCopy = [...data];
    
        usersCopy.sort((userA, userB) => {
          const nameA = userA.powerstats[col];
          const nameB = userB.powerstats[col];
    
          if (sorted.reversed) {
            return nameB-nameA;
          }
    
          return nameA-nameB;
        });
        setUsers(usersCopy);
        console.log(usersCopy)
    };
    

    return(
        <div>
            <Search/>
            <div>
                <Sort sortByIntelligence={()=>sortByIntelligence("strength")}/>
               <ul>
                    {values?.map((value, index)=>(
                    <List key={index} value={value}/>
                    ))}
                </ul> 
            </div>
            
        </div>
    )
}

export default Dashboard;