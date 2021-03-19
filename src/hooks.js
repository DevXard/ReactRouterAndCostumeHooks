import {useState} from 'react';

function getRandom(min=0, max=100) {
    return Math.floor(Math.random() * (max - min) + min)
}

const useFoodList = () => {
    const [foods, setFoods] = useState([])

    const addNewFood = () => {
        setFoods(foods => ([...foods, {x:getRandom(), y:getRandom()}]))
    }

    return [foods, addNewFood]
}

export default useFoodList