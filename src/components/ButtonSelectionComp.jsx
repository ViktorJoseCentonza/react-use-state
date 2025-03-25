// import { useState } from 'react'

// export default function ButtonSelectionComp(props) {
//     cibst [button,setButtonActive] = useState(false);
//     return (
//         <>
//             {props.ButtonData.map((object) => (

//                 <button key={`buttonSelect-${object.id}`} className={object.isOn ? "enabled" : "disabled"} onClick={() => object.isOn = !object.isOn}>{object.title}</button>



//             ))}
//         </>
//     )
// }


import { useState } from 'react';

export default function ButtonSelectionComp(props) {
    const [buttonStates, setButtonActive] = useState(
        props.ButtonData.map(object => object.isOn)
    );

    const handleButtonClick = (index) => {
        const updatedButtonStates = [...buttonStates];
        updatedButtonStates[updatedButtonStates.indexOf(true)] = false;
        updatedButtonStates[index] = !updatedButtonStates[index];
        setButtonActive(updatedButtonStates);
    };

    return (
        <>
            {props.ButtonData.map((object, index) => (
                <button
                    key={`buttonSelect-${object.id}`}
                    className={buttonStates[index] ? "enabled" : "disabled"}
                    onClick={() => handleButtonClick(index)}
                >
                    {object.title}
                </button>
            ))}
        </>
    );
}