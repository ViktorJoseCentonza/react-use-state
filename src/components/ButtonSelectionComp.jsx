import { useState } from 'react';
import CardRenderer from './CardRenderer'
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

            <CardRenderer data={props.ButtonData} buttonStates={buttonStates} />

        </>
    );
}

