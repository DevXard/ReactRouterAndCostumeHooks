import './ICream.css'

const ICreem = ({x, y}) => {
    return(
        <>
            <img 
            alt="IceCream"
            style={{position: "absolute",
            top: `${y}vh`,
            left: `${x}vw`}} 
            className="ICreem-img" 
            src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c1b6.png"/>
        </>
    )
}

export default ICreem;