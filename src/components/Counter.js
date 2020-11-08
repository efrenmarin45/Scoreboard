import React from 'react';
import PropTypes from 'prop-types';


//!Functional Component
// const Counter = (props) => {
//     return(
//         <div className='counter'>
//             <button className='counter-action decrement'> - </button>
//             <span className='counter-score'> {props.score} </span>
//             <button className='counter-action increment'> + </button>
//         </div>
//     )
// }


const Counter = ({index, score, changeScore}) => {
    return(
        <div className='counter'>
            <button className='counter-action decrement' onClick={ () => changeScore(index, -1)} > - </button>
            <span className='counter-score'> {score} </span>
            <button className='counter-action increment' onClick={ () => changeScore(index, 1)}> + </button>
        </div>
    )
    
}

Counter.propTypes = {
    index: PropTypes.number,
    score: PropTypes.number,
    changeScore: PropTypes.func
}

export default Counter;