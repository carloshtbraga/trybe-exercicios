import React from "react";

class App extends React.Component {

  state = {
    numeroClique1: 0,
    numeroClique2: 0,
    numeroClique3: 0,
  }

  click1 = () => {
    this.setState((previous) => ({
      numeroClique1: previous.numeroClique1 + 1,
    }))
  };

  click2 = () => {
    this.setState((previous) => ({
      numeroClique2: previous.numeroClique2 + 1,
    }))
  };

  click3 = () => {
    this.setState((previous) => ({
      numeroClique3: previous.numeroClique3 + 1,
    }))
  };

  render() {
    return (
      <div>
        <button onClick={this.click1}>{this.state.numeroClique1}</button>
        <button onClick={this.click2}>{this.state.numeroClique2}</button>
        <button onClick={this.click3}>{this.state.numeroClique3}</button>
      </div>
    );
  }
}

export default App;
