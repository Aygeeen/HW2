import React, {useState} from "react";
import "./squares.css"

export default function Squares() {
    const [colorRed, setColorRed] = useState('red')
    const [colorBlue, setColorBlue] = useState('blue')

    const handleClick = () => {
        setColorRed(colorBlue)
        setColorBlue(colorRed)
    }
    return (
        <>
            <div onClick={handleClick} className="square" style={{backgroundColor: colorRed}}></div>
            <div onClick={handleClick} className="square" style={{backgroundColor: colorBlue}}></div>
        </>
    )
}

