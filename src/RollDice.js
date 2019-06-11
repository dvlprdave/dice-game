import React, { Component } from 'react'
import Die from './Die';
import './Rolldice.css'

class RollDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  }

  state = { 
    die1: 'one',
    die2: 'one'
  }

  roll = () => {
    //Take sides array and get random number
   const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
   const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
   //set state for each new roll 
   this.setState({
     die1: newDie1,
     die2: newDie2
   })
  }
  render() {
    return (
      <div className='dice'>
        <div className='dice-container'>
          <Die face={this.state.die1} />
          <Die face={this.state.die2}/>
        </div>
        <div>
          <button onClick={this.roll} className='dice-btn'>Roll Dice!</button>
        </div>
      </div>
    )
  }
}

export default RollDice