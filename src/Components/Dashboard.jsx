import React, { useEffect, useState } from 'react';
import Search from './Search';
import List from './List';
import Sort from './Sort';
import Intelligence from './Intelligence';
import Strength from './Strength';
import Speed from './Speed';
import Durability from './Durability';
import Power from './Power';
import Gender from './Gender';
import Race from './Race';
import EyeColor from './EyeColor';
import Combat from './Combat';
import HairColor from './HairColor';
import Weight from './Weight';
import Height from './Height';

import { fetchValues } from '../Store/Actions/Reducers/reduce';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, NavLink } from "react-router-dom";


const Dashboard = () => {

    const [sorted, setSorted] = useState({ sorted: "powerstats", reversed: false });
    const dispatch = useDispatch();
    const { data, loading } = useSelector(state => state.values)
    const [values, setUsers] = useState([...data]);


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
                <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                    <p>Order by <br />Powerstats:</p>
                    <div >
                        <Link to="/int">
                            <button onClick={() => sortByPowerstats("intelligence")} type="button" className="btn btn-outline-warning">Intelligence</button>
                            <div className='containerCard'>
                                {values?.map((value, index) => (
                                    <Intelligence key={index} value={value} sort={() => sortByPowerstats("intelligence")} />
                                ))}
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/str">
                            <button onClick={() => sortByPowerstats("strength")} type="button" className="btn btn-outline-warning">Strength</button>
                            <div className='containerCard'>
                                {values?.map((value, index) => (
                                    <Strength key={index} value={value} sort={() => sortByPowerstats("strength")} />
                                ))}
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/speed">
                            <button onClick={() => sortByPowerstats("speed")} type="button" className="btn btn-outline-warning">Speed</button>
                            <div className='containerCard'>
                                {values?.map((value, index) => (
                                    <Speed key={index} value={value} />
                                ))}
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/dur">
                            <button onClick={() => sortByPowerstats("durability")} type="button" className="btn btn-outline-warning">Durability</button>
                            <div className='containerCard'>
                                {values?.map((value, index) => (
                                    <Durability key={index} value={value} />
                                ))}
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/pow">
                            <button onClick={() => sortByPowerstats("power")} type="button" className="btn btn-outline-warning">Power</button>
                            <div className='containerCard'>
                                {values?.map((value, index) => (
                                    <Power key={index} value={value} />
                                ))}
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/comb">
                            <button onClick={() => sortByPowerstats("combat")} type="button" className="btn btn-outline-warning">Combat</button>
                            <div className='containerCard'>
                                {values?.map((value, index) => (
                                    <Combat key={index} value={value} />
                                ))}
                            </div>
                        </Link>
                    </div>
                </div>


                <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                    <p>Order by <br /> Appearance:</p>
                    <div>
                        <Link to="/gen">
                            <button onClick={() => sortByAppearance("gender")} type="button" className="btn btn-outline-warning">Gender</button>
                            <div className='containerCard'>
                                {values?.map((value, index) => (
                                    <Gender key={index} value={value} />
                                ))}
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/race">
                            <button onClick={() => sortByAppearance("race")} type="button" className="btn btn-outline-warning">Race</button>
                            <div className='containerCard'>
                                {values?.map((value, index) => (
                                    <Race key={index} value={value} />
                                ))}
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/eye">
                            <button onClick={() => sortByAppearance("eye-color")} type="button" className="btn btn-outline-warning">Eye Color</button>
                            <div className='containerCard'>
                                {values?.map((value, index) => (
                                    <EyeColor key={index} value={value} />
                                ))}
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/hair">
                            <button onClick={() => sortByAppearance("hair-color")} type="button" className="btn btn-outline-warning">Hair Color</button>
                            <div className='containerCard'>
                                {values?.map((value, index) => (
                                    <HairColor key={index} value={value} />
                                ))}
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/wei">
                            <button onClick={sortByW} type="button" className="btn btn-outline-warning">Weight</button>
                            <div className='containerCard'>
                                {values?.map((value, index) => (
                                    <Weight key={index} value={value} />
                                ))}
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/hei">
                            <button onClick={sortByH} type="button" className="btn btn-outline-warning">Height</button>
                            <div className='containerCard'>
                                {values?.map((value, index) => (
                                    <Height key={index} value={value} />
                                ))}
                            </div>
                        </Link>
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