import React, {Component} from 'react';
import Header from './Header';
import Player from './Player';


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


class App extends Component {
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

