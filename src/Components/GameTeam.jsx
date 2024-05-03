import React, { Component } from "react";
import Pokecard from "./Pokecard";

export default class GameTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-red-500 font-bold">
          {this.props.win ? "Winning" : "Losing"} Hand
        </h1>
        <h2 className="text-lg font-medium mt-3">Total Experience: {this.props.exp}</h2>

        <div className="max-w-[1200px] mx-auto grid grid-cols-4 justify-items-center gap-4 mt-5 md:grid-cols-2 sm:grid-cols-1">
          {this.props.teams.map((team) => (
            <Pokecard key={team.id} data={team} />
          ))}
        </div>
      </div>
    );
  }
}
