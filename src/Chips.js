import {Link} from "react-router-dom";
import Chip from './Chip';
import useFoodList from './hooks';

import './Chips.css'
const Chips = () => {
    const [chips, addChip] = useFoodList();

    return (
        <div className="Chips">
            <img alt="LaysChips" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdealhuntingbabe.com%2Fwp-content%2Fuploads%2F2019%2F07%2Flays-classic-potato-chips.jpg&f=1&nofb=1" />
            {chips.map(({x, y}) => (<Chip x={x} y={y}/>))}
            
            <div className="Chips-buttoon-container">
            <button onClick={addChip}>Add Chip</button>
                <Link className="Chips-goback" to="/" >Back</Link>
            </div>
        </div>
    )
}

export default Chips;
