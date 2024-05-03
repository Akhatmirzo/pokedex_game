import React, { Component } from 'react'

export default class Pokecard extends Component {

  constructor(props) {
    super(props)
    this.state = {};
  }
  render() {
    const {id, name, type, base_experience} = this.props.data;
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
      <div id={id} className='w-[200px] p-2 border-2 border-gray-500 bg-gray-400 flex items-center flex-col'>
        <h2 className='text-[blue] text-xl font-bold'>{name}</h2>
        <img src={imageUrl} alt='Img'/>
        <h3>Type: {type}</h3>
        <h3>EXP: {base_experience}</h3>
      </div>
    )
  }
}
