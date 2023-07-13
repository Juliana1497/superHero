import React from "react";
import { PiArrowsDownUpDuotone } from 'react-icons/pi'

//Se trae desde el dashboard las propiedades asignadas para organizar deacuerdo al dato
const Sort = ({ sortByIntelligence, sortByStrength, sortBySpeed, sortByDurability, sortByPower, sortByCombat, sortByGender, sortByRace, sortByHeight, sortByWeight, sortByEye, sortByHair }) => {
    return (
        <div>
            {/*Botones para disparar la funcion de organizar deacuerdo al dato */}
            <div className="container-buttons">
                <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                    <p>Order by <br />Powerstats:</p>
                    <div onClick={sortByIntelligence}>
                        <button type="button" className="btn btn-outline-warning" id="but">Intelligence<PiArrowsDownUpDuotone /></button>
                    </div>
                    <div onClick={sortByStrength}>
                        <button type="button" className="btn btn-outline-warning" id="but">Strength<PiArrowsDownUpDuotone /></button>
                    </div>
                    <div onClick={sortBySpeed}>
                        <button type="button" className="btn btn-outline-warning" id="but">Speed<PiArrowsDownUpDuotone /></button>
                    </div>
                    <div onClick={sortByDurability}>
                        <button type="button" className="btn btn-outline-warning" id="but">Durability<PiArrowsDownUpDuotone /></button>
                    </div>
                    <div onClick={sortByPower}>
                        <button type="button" className="btn btn-outline-warning" id="but">Power<PiArrowsDownUpDuotone /></button>
                    </div>
                    <div onClick={sortByCombat}>
                        <button type="button" className="btn btn-outline-warning" id="but">Combat<PiArrowsDownUpDuotone /></button>
                    </div>
                </div>
                <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                    <p>Order by <br /> Appearance:</p>
                    <div onClick={sortByGender}>
                        <button type="button" className="btn btn-outline-warning" id="but">Gender<PiArrowsDownUpDuotone /></button>
                    </div>
                    <div onClick={sortByRace}>
                        <button type="button" className="btn btn-outline-warning" id="but">Race<PiArrowsDownUpDuotone /></button>
                    </div>
                    <div onClick={sortByHeight}>
                        <button type="button" className="btn btn-outline-warning" id="but">Height<PiArrowsDownUpDuotone /></button>
                    </div>
                    <div onClick={sortByWeight}>
                        <button type="button" className="btn btn-outline-warning" id="but">Weight<PiArrowsDownUpDuotone /></button>
                    </div>
                    <div onClick={sortByEye}>
                        <button type="button" className="btn btn-outline-warning" id="but">Eye Color<PiArrowsDownUpDuotone /></button>
                    </div>
                    <div onClick={sortByHair}>
                        <button type="button" className="btn btn-outline-warning" id="but">Hair Color<PiArrowsDownUpDuotone /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sort;