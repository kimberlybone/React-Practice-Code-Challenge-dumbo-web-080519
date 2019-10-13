import React from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends React.Component {
    state = {
      sushis: [],
      eatenSushi: [],
      money: 100,
      index: 0,
      amount: 0,
      storeEarnings: 0
    }

  getFetch = () => {
    fetch(API)
    .then(res=>res.json())
    .then( sushis => {
      this.setState({ sushis })
    })
  }

  componentDidMount(){
    this.getFetch()
  }

  eat = (sushi) => {
    const leftoverMoney = this.state.money - sushi.price
    if(!this.state.eatenSushi.includes(sushi) && leftoverMoney >= 0){
      this.setState({
        eatenSushi: [...this.state.eatenSushi, sushi],
        money: leftoverMoney
      })
    } else {
      alert("You don't have enough money to buy this item!")
    }
  }

  fourSushi = () => {
    return this.state.sushis.slice(this.state.index, this.state.index + 4)
  }

  moreSushi = (e) => {
    let newIndex = this.state.index + 4
    this.setState({
      index: newIndex
    })
  }

  getAmount = (e) => {
    let input = e.target.value
    let newAmount = parseInt(input, 10)
    this.setState({
      amount: newAmount
    })
  }

  addMoney = (e) => {
    e.preventDefault()
    let newMoney = this.state.money + this.state.amount
    this.setState({
      money: newMoney
    })
  }

  // storeEarnings = () => {
  //   let eatenSushiArr = this.state.eatenSushi
  //   let price = []
  //   let sum = 0
  //   eatenSushiArr.map(sushi => {
  //     return price.push(sushi.price)
  //     // for (let i = 0; i < eatenSushiArr.length; i++) {
  //     //   return sum += totalPrice
  //     // }
  //   })
  //   sum = price.reduce((result, num) => result + num)
  //   this.setState({
  //     storeEarnings: sum
  //   })
  //   console.log(this.state.storeEarnings)
  // }

  render() {
    return (
      <div className="app">
        <SushiContainer
          eat={this.eat}
          fourSushi={this.fourSushi()}
          moreSushi={this.moreSushi}
          eatenSushi={this.state.eatenSushi}
          />
        <Table
          eatenSushi={this.state.eatenSushi}
          totalMoney={this.state.money}
          getAmount={this.getAmount}
          addMoney={this.addMoney}
          // storeEarnings={this.storeEarnings()}
          />
      </div>
    );
  }
}

export default App;
