import React from "react";
import {PiArrowsDownUpDuotone} from 'react-icons/pi'

const Sort = ({ sortByIntelligence, sortByStrength, sortBySpeed, sortByDurability, sortByPower, sortByCombat, sortByGender, sortByRace, sortByHeight, sortByWeight, sortByEye, sortByHair}) => {
    return (
        <div>
            <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                <p>Order by <br />Powerstats:</p>
                <div onClick={sortByIntelligence}>
                    <button type="button" className="btn btn-outline-warning">Intelligence<PiArrowsDownUpDuotone/></button>
                </div>
                <div onClick={sortByStrength}>
                    <button type="button" className="btn btn-outline-warning">Strength<PiArrowsDownUpDuotone/></button>
                </div>
                <div onClick={sortBySpeed}>
                    <button type="button" className="btn btn-outline-warning">Speed<PiArrowsDownUpDuotone/></button>
                </div>
                <div onClick={sortByDurability}>
                    <button type="button" className="btn btn-outline-warning">Durability<PiArrowsDownUpDuotone/></button>
                </div>
                <div onClick={sortByPower}>
                    <button type="button" className="btn btn-outline-warning">Power<PiArrowsDownUpDuotone/></button>
                </div>
                <div onClick={sortByCombat}>
                    <button type="button" className="btn btn-outline-warning">Combat<PiArrowsDownUpDuotone/></button>
                </div>
            </div>
            <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                <p>Order by <br /> Appearance:</p>
                <div onClick={sortByGender}>
                    <button type="button" className="btn btn-outline-warning">Gender<PiArrowsDownUpDuotone/></button>
                </div>
                <div onClick={sortByRace}>
                    <button type="button" className="btn btn-outline-warning">Race<PiArrowsDownUpDuotone/></button>
                </div>
                <div onClick={sortByHeight}>
                    <button type="button" className="btn btn-outline-warning">Height<PiArrowsDownUpDuotone/></button>
                </div>
                <div onClick={sortByWeight}>
                    <button type="button" className="btn btn-outline-warning">Weight<PiArrowsDownUpDuotone/></button>
                </div>
                <div onClick={sortByEye}>
                    <button type="button" className="btn btn-outline-warning">Eye Color<PiArrowsDownUpDuotone/></button>
                </div>
                <div onClick={sortByHair}>
                    <button type="button" className="btn btn-outline-warning">Hair Color<PiArrowsDownUpDuotone/></button>
                </div>
            </div>
        </div>
    )
}

export default Sort;