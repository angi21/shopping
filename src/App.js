import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 1 },
      { id: 4, value: 0 }
    ]
  };
  handleIncrement = counter => {
    // console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    //console.log(counters);

    this.setState({ counters });
  };

  handleDecrement = counter => {
    //console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value > 0) --counters[index].value;
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDel = counterID => {
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters: counters });
  };
  render() {
    //console.log(this.state.counters);

    return (
      <React.Fragment>
        <NavBar
          totalCounter={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="contianer">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDel}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
