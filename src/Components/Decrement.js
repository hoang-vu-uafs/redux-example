import React from "react";
import { decrement } from "../actionCreators/action";
import { connect } from "react-redux";

function Decrement(props) {
  return (
    <div>
      <button onClick={props.decrement}>{props.count}</button>
    </div>
  );
}
// get data from store
const mapStateToProps = (state) => ({
  count: state.count,
});
// dont have to use dispatch
// onClick = {()=>dispatch({type: ""})}
const mapDispatchToProps = { decrement };

export default connect(mapStateToProps, mapDispatchToProps)(Decrement);
