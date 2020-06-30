import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncreament } = this.props;

    return (
      <di>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reste
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncreament={onIncreament}
            counter={counter}
          />
        ))}
      </di>
    );
  }
}

export default Counters;