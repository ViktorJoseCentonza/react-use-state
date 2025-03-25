export default function CardRenderer(props) {
    const activeContent = props.buttonStates.indexOf(true)
    if (activeContent !== -1) {
        return (
            <div className='card'>
                <h2>{props.data[activeContent].title}</h2>
                <p>{props.data[activeContent].content}</p>
            </div>
        )
    }
}