import React, { Component } from "react";
import Pokecard from "./Pokecard";

export default class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="max-w-[1200px] mx-auto grid grid-cols-4 justify-items-center gap-4 mt-5 md:grid-cols-2 sm:grid-cols-1">
        {this.props.heroData.map(poke => <Pokecard key={poke.id} data={poke} />)}
      </div>
    );
  }
}
