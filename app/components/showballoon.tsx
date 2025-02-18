import React from "react";

const Showballoon = ({balloonNum}:{balloonNum:number}) => {
    return (
        <div>
            <h1 className="text-2xl">残りのバルーン：{balloonNum}</h1>
        </div>
    )
}

export default Showballoon;