import './Chip.css';
const Chip = ({x,y}) => {

    return(
        <div className="Chip">
            <img 
            style={{
            position: "absolute",
            height: `20vh`,
            width: `20vh`,
            top: `${y}vh`,
            left: `${x}vw`}} 
            alt="chip"
            src="https://cutewallpaper.org/21/doritos-no-background/An-animated-gif-of-a-single-Dorito-chip-spinning-against-a-.gif" />
        </div>
    )
}

export default Chip;