import {Link} from 'react-router-dom';
import ICreem from './ICreem';
import useFoodList from './hooks';

import './IceCreem.css'

const IceCreem = () => {
    const [ foods, addNewFood ] = useFoodList()

    return (
        <div className="IceCreem">
            <div>
                {foods.map(({x, y}) => (<ICreem x={x} y={y}/>))}    
                <div className="IceCreem-buttoon-container">
                    <button onClick={() => addNewFood()}>Add IceCreem</button>
                    <Link to="/" >Back</Link>
                </div>
                
            </div>
        </div>
    )

}

export default IceCreem;