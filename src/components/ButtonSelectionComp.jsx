import { useState } from 'react'

export default function ButtonSelectionComp(props) {
    return (
        <>
            {props.ButtonData.map((object) => (

                <button key={`buttonSelect-${object.id}`} className={object.isOn ? "enabled" : "disabled"} onClick={() => object.isOn = !object.isOn}>{object.title}</button>



            ))}
        </>
    )
}