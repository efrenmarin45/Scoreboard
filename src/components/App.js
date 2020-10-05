import React from 'react';

const Header = (props) => {
    return(
        <header>
            <h1> {props.title} </h1>
            <span className='stats'>Players: {props.totalPlayers}</span>
        </header>
    );
};


const Player = (props) => {
    return(
        <div className='player'>
            <span className='player-name'>
                <button className='remove-player' onClick={() => props.removePlayer(props.id)}>✖</button>
                {props.name}
            </span>
            <Counter />
        </div>
    );
};


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

class Counter extends React.Component{
    
    //! One way to declare state
    // constructor(){
    //     super()
    //     this.state = {
    //         score: 0
    //     }
    // }
    //! OR

    state = {
        score: 0
    };

    incrementScore = () => {
        this.setState( prevState => {
            return {
                score: prevState.score + 1
            }
        })
    }

    decrementScore = () => {
        this.setState( prevState => {
            return{
                score: prevState.score -1
            }
        })
    }

    render(){
        return(
            <div className='counter'>
                <button className='counter-action decrement' onClick={this.decrementScore}> - </button>
                <span className='counter-score'> {this.state.score} </span>
                <button className='counter-action increment' onClick={this.incrementScore}> + </button>
            </div>
        )
    }
}


class App extends React.Component {
    state = {
        players: [
        {
            name: "D.VA",
            id: 1
        },
        {
            name: "Zenyatta",
            id: 2
        },
        {
            name: "Soldier 76",
            id: 3
        },
        {
            name: "Sombra",
            id: 4
        }
    ]
    }

    handleRemovePlayer = (id) => {
        this.setState( prevState => {
            return{
                players: prevState.players.filter(p => p.id !== id)
            }
        })
    }

    render(){
        return(
            <div className='scoreboard'>
                <Header 
                title="Scoreboard" 
                totalPlayers={this.state.players.length}
                />

                {/* List of Players */}
                {this.state.players.map(player =>
                    <Player 
                        id={player.id}
                        name={player.name} 
                        key={player.id}
                        removePlayer={this.handleRemovePlayer}
                    />
                )}
            </div>
        )}
}


export default App;

