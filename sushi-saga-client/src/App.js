import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import fetcher from "./fetcher"

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    balance: 100,
    sushiList: [],
    displayIndex: 0
  }

  componentDidMount() {
    fetcher(API, this.addSushiToState)
  }
  
  addSushiToState = (data) => {
    this.setState({ sushiList: data} )
  }

  fourSushisToDisplay = () => {
    let { sushiList, displayIndex } = this.state
    return sushiList.slice(displayIndex, displayIndex+4)
  }

  nextFour = () => {
    this.setState(({displayIndex}) => {
      let newIndex = displayIndex + 4 >= 100 ? displayIndex + 4 - 100 : displayIndex + 4
      return { displayIndex: newIndex}
    })
  }

  handleSushiClick = (id, price) => {
    let newBalance = this.state.balance - price
    if (newBalance >= 0) {
      this.eatSushi(id, newBalance)

    }
  }
  
  eatSushi = (id, newBalance) => {
    let newSushiList = [...this.state.sushiList]
    let eatenSushi = newSushiList.find(sushi => sushi.id === id )
    if (!eatenSushi.eaten) {
      eatenSushi.eaten = true
      this.setState({
        sushiList: newSushiList,
        balance: newBalance
      })
    }

  }

  eatenPlates = () => {
    let { sushiList } = this.state
    return sushiList.filter( sushi => sushi.eaten )
  }

  render() {
    let {balance} = this.state
    return (
      <div className="app">
        <SushiContainer
            sushiList={this.fourSushisToDisplay()}
            nextFour={this.nextFour}
            handleSushiClick={this.handleSushiClick}
        />
        <Table 
            plates={this.eatenPlates()}
            balance={balance}     
        />

      </div>
    );
  }
}

export default App;