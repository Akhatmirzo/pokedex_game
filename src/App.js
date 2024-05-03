import React, { Component } from "react";
import "./App.css";
import Pokedex from "./Components/Pokedex";
import GameTeam from "./Components/GameTeam";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      openGame: false,
      heroData: [
        { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
        { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
        { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
        { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
        { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
        { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
        { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
        { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
      ],
      firstTeam: [],
      secondTeam: [],
      firstTeamExp: 0,
      secondTeamExp: 0,
      winner: {
        firstTeamWin: false,
        secondTeamWin: false,
      },
    };
  }

  checkWin = (firstTeam, secondTeam) => {
    let firstTeamExp = 0;
    let secondTeamExp = 0;

    for (let i = 0; i < firstTeam.length; i++) {
      firstTeamExp += firstTeam[i].base_experience;
    }

    for (let i = 0; i < secondTeam.length; i++) {
      secondTeamExp += secondTeam[i].base_experience;
    }

    this.setState({ firstTeamExp, secondTeamExp });

    if (firstTeamExp > secondTeamExp) {
      this.setState({
        winner: {
          firstTeamWin: true,
          secondTeamWin: false,
        },
      });
    } else {
      this.setState({
        winner: {
          firstTeamWin: false,
          secondTeamWin: true,
        },
      });
    }
  };

  randomTeam = () => {
    let heros = [...this.state.heroData];
    let firstTeam = [];
    let secondTeam = [];

    for (let i = 0; i < 4; i++) {
      let randomTeam = Math.floor(Math.random() * heros.length);
      firstTeam.push(heros[randomTeam]);
      heros.splice(randomTeam, 1);
    }

    secondTeam = [...heros];

    this.setState({ firstTeam, secondTeam });

    this.checkWin(firstTeam, secondTeam);
  };

  startGame = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000)
    this.setState({ openGame: true });
    this.randomTeam();
  };

  stopGame = () => {
    this.setState({ openGame: false });
  };

  render() {
    return (
      <>
        <button
          onClick={() => this.startGame()}
          className="m-4 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          {this.state.openGame ? "Restart Game" : "Start Game"}
        </button>

        {this.state.openGame && (
          <button
            onClick={() => this.stopGame()}
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Exits Game
          </button>
        )}
        <div className="w-full relative">
          <Pokedex heroData={this.state.heroData} />

          {this.state.openGame && (
            <div className="w-full h-[calc(100vh_-_100px)] fixed top-[100px] left-0 bg-white flex flex-col gap-10">
              <GameTeam
                win={this.state.winner.firstTeamWin}
                teams={this.state.firstTeam}
                exp={this.state.firstTeamExp}
              />
              <GameTeam
                win={this.state.winner.secondTeamWin}
                teams={this.state.secondTeam}
                exp={this.state.secondTeamExp}
              />
            </div>
          )}
        </div>

        <div className={`wrap w-full h-screen absolute top-0 left-0 ${this.state.loading ? 'grid': 'hidden'}`}>
          <div className="pl">
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__text">Loading…</div>
          </div>
        </div>
      </>
    );
  }
}
