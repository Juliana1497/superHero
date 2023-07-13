import React from "react";

const Sort = ({sortByIntelligence, sortBySpeed}) =>{
    return(
        <>
        <div onClick={sortByIntelligence}>
            <button>inte</button>
        </div>
        <div onClick={sortBySpeed}>
            <button>speed</button>
        </div>
        </>
    )
}

export default Sort;