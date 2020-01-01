import React, { Component } from 'react'
import PopOvers from "./Components/PopOvers";
import Cards from "./Components/Cards";
import Jumbotron from "./Components/Jumbotron";
import ButtonGroup1 from "./Components/ButtonGroup1";
export default class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron/>
        <PopOvers/>
        <Cards/>
        <ButtonGroup1 />
      </div>
    )
  }
}
