import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value
  //   // tags: ["tag1", "tag2", "tag3"],
  //   // keys: ["key1", "key2", "key3"]
  // };

  // constructor() {
  //   super();
  //   this.handleInc = this.handleInc.bind(this);
  // } OR

  // handleInc = () => {
  //   // console.log("clicked", this);
  //   this.setState({ value: this.props.counter.value + 1 });
  // };

  render() {
    // console.log("props", this.props);

    return (
      <div>
        <span className={this.getColorClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-dark btn-sm m-2"
          disabled={this.props.counter.value === 0}
        >
          -
        </button>
        <button
          onClick={() => {
            this.props.onDelete(this.props.counter.id);
          }}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        {/* <ul>
          {this.state.tags.map(tag => {
            return <li key={tag}>{tag}</li>;
          })}
        </ul> */}
      </div>
    );
  }

  getColorClasses() {
    // console.log(this);

    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
