import React, {Component} from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';


class App extends Component {
    state = {
        players: [
        {
            name: "D.VA",
            score: 0,
            id: 1
        },
        {
            name: "Zenyatta",
            score: 0,
            id: 2
        },
        {
            name: "Soldier 76",
            score: 0,
            id: 3
        },
        {
            name: "Sombra",
            score: 0,
            id: 4
        }
    ]
    };

    prevPlayerId = 4;

    handleScoreChange = (index, points) => {
        this.setState( prevState => {
            return {
                score: prevState.players[index].score += points
            }
        })
    }

    getHighScore = () => {
        const scores = this.state.players.map( p => p.score);
        const highScore = Math.max(...scores);
        if (highScore){
            return highScore;
        }
        return null;
    }

    handleAddPlayer = (name) => {
        this.setState( prevState => {
            return {
                players: [
                    ...prevState.players,
                    {
                       name: name,
                       score: 0,
                       id: this.prevPlayerId += 1  
                    }
                ]
            }
        })
    }

    handleRemovePlayer = (id) => {
        this.setState( prevState => {
            return{
                players: prevState.players.filter(p => p.id !== id)
            }
        })
    }

    render(){

        const highScore = this.getHighScore;

        return(
            <div className='scoreboard'>
                <Header 
                title="Scoreboard" 
                players={this.state.players}
                />

                {/* List of Players */}
                {this.state.players.map( (player, index) =>
                    <Player 
                        id={player.id}
                        name={player.name}
                        score={player.score} 
                        key={player.id}
                        index={index}
                        changeScore={this.handleScoreChange}
                        removePlayer={this.handleRemovePlayer}
                        isHighScore={highScore === player.score}
                    />
                )}

                <AddPlayerForm addPlayer={this.handleAddPlayer} />
            </div>
        )}
}


export default App;

