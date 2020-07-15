import React from "react";
import { connect } from "react-redux";
import { increment, add } from "./actionCreators/action";

import Decrement from "./Components/Decrement";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <button onClick={props.increment}>{props.count}</button>
      <Decrement />
      <button onClick={() => props.add(10)}>Add</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = { increment, add };

export default connect(mapStateToProps, mapDispatchToProps)(App);
