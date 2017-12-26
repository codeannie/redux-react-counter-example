import React from 'react';
import { connect } from 'react-redux';
// import { incrementAction, decrementAction } from '../Actions';
import { INCREMENT, DECREMENT } from '../Actions';

export class Counter extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.increment = this.increment.bind(this);
  //   this.decrement = this.decrement.bind(this);
  // }

  // why is it not hitting the reducers to update the state? 
  // increment() {
  //   console.log('increment ->', this.props);
  //   this.props.increment();
  // }

  // decrement() {
  //   console.log('decrement ->', this.props);
  //   this.props.decrement();
  // }

  // // without mapDispatchToProps: 
  increment = () => {
    console.log('increment props', this.props);
    this.props.dispatch({ type: INCREMENT });
  }

  decrement = () => {
    this.props.dispatch({ type: DECREMENT });
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment() {
//       const action = incrementAction();
//       dispatch(action);
//     },
//     decrement() {
//       const action = decrementAction();
//       dispatch(action);
//     }
//   }
// }

export default connect(mapStateToProps)(Counter);