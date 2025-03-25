import { useState } from 'react';
import CardRenderer from './CardRenderer'
export default function ButtonRenderer(props) {
    const [buttonStates, setButtonActive] = useState(
        props.data.map(object => object.isOn)
    );

    const handleButtonClick = (index) => {
        const updatedButtonStates = [...buttonStates];
        updatedButtonStates[updatedButtonStates.indexOf(true)] = false;
        updatedButtonStates[index] = !updatedButtonStates[index];
        setButtonActive(updatedButtonStates);
    };

    return (
        <>
            <div className='button-holder d-flex'>
                {
                    props.data.map((object, index) => (
                        <button
                            key={`buttonSelect-${object.id}`}
                            className={buttonStates[index] ? "enabled" : "disabled"}
                            onClick={() => handleButtonClick(index)}
                        >
                            {object.title}
                        </button>
                    ))
                }
            </div>

            <CardRenderer data={props.data} buttonStates={buttonStates} />
        </>
    )
}