import React, { useEffect, useState } from 'react';
import Search from './Search';
import List from './List';
import Intelligence from './Intelligence';
import Sort from './Sort';

import { fetchValues } from '../Store/Actions/Reducers/reduce';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";


const Dashboard = () => {

    const [sorted, setSorted] = useState({ sorted: "powerstats", reversed: false });
    const dispatch = useDispatch();
    const { data, loading } = useSelector(state => state.values)
    const [values, setUsers] = useState([...data]);

    const navigate = useNavigate();

    function intell() {
        navigate("/int")
    }

    useEffect(() => {
        dispatch(fetchValues('search/m'))
    }, [dispatch]);

    if (loading) return <p>Loading...</p>

    const sortByPowerstats = (col) => {
        setSorted({ sorted: "powerstats", reversed: !sorted.reversed });

        const usersCopy = [...data];

        usersCopy.sort((userA, userB) => {
            const nameA = userA.powerstats[col];
            const nameB = userB.powerstats[col];

            if (sorted.reversed) {
                return nameB - nameA;
            }

            return nameA - nameB;
        });
        setUsers(usersCopy);
        console.log(usersCopy)
    };

    const sortByAppearance = (col) => {
        setSorted({ sorted: "appearance", reversed: !sorted.reversed });

        const usersCopy = [...data];

        usersCopy.sort((userA, userB) => {
            const nameA = userA.appearance[col];
            const nameB = userB.appearance[col];

            if (sorted.reversed) {
                return nameB.localeCompare(nameA);
            }

            return nameA.localeCompare(nameB);
        });
        setUsers(usersCopy);
        console.log(usersCopy)
    };

    const sortByW = () => {
        setSorted({ sorted: "appearance.weight[0]", reversed: !sorted.reversed });

        const usersCopy = [...data];

        usersCopy.sort((userA, userB) => {
            const nameA = userA.appearance.weight[0];
            const nameB = userB.appearance.weight[0];

            if (sorted.reversed) {
                return nameB.localeCompare(nameA);
            }

            return nameA.localeCompare(nameB);
        });
        setUsers(usersCopy);
        console.log(usersCopy)
    };

    const sortByH = () => {
        setSorted({ sorted: "appearance.height[1]", reversed: !sorted.reversed });

        const usersCopy = [...data];

        usersCopy.sort((userA, userB) => {
            const nameA = userA.appearance.height[1];
            const nameB = userB.appearance.height[1];

            if (sorted.reversed) {
                return nameB.localeCompare(nameA);
            }

            return nameA.localeCompare(nameB);
        });
        setUsers(usersCopy);
        console.log(usersCopy)
    };


    return (
        <>
            <h1 className='titulo'>Super Heroes</h1>
            <Search />
            <div className='container-buttons'>
                <div onClick={intell}>
                    <Sort sortByIntelligence={() => sortByPowerstats("intelligence")} sortByStrength={() => sortByPowerstats("strength")} sortBySpeed={() => sortByPowerstats("speed")} sortByDurability={() => sortByPowerstats("durability")} sortByPower={() => sortByPowerstats("power")} sortByCombat={() => sortByPowerstats("combat")} sortByGender={() => sortByAppearance("gender")} sortByRace ={() => sortByAppearance("race")} sortByHeight={sortByH} sortByWeight={sortByW} sortByEye={() => sortByAppearance("eye-color")} sortByHair={() => sortByAppearance("hair-color")} />

                    <div className='containerCard'>
                        {values?.map((value, index) => (
                            <Intelligence key={index} value={value} />
                        ))}
                    </div>
                </div>
            </div>


            <div>
                <div className='containerCards'>
                    {data?.map((value, index) => (
                        <List key={index} value={value} />
                    ))}
                </div>
            </div>

        </>
    )
}

export default Dashboard;