import {Link} from 'react-router-dom';

import './VendingMachine.css'


const VendingMachine = () => {

    return (
        <div className="VendingMachine">
           <div className="VendingMachine-links">
                <Link to="/drink">Cocacola</Link>
                <Link to="/chips">Chips</Link>
                <Link to="/icecream">Ice Creem</Link>
           </div>
        </div>
    )

}

export default VendingMachine;

