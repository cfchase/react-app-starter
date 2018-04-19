import * as React from 'react';
import { connect } from 'react-redux';
import { incrementHelloWorld } from '../actions/helloWorld';


class HelloWorld extends React.Component {
  render() {
    return (
      <div>
      <h2>Hello World - {this.props.increment}!</h2>
        <button
          id="helloWorldClick"
          type="button"
          onClick={e => {
            this.props.click(e);
          }}
        >
          Click Me
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  increment: state.helloWorldReducer.increment
});

const mapDispatchToProps = (dispatch) => ({
  click: (e) => {
    e.preventDefault();
    dispatch(incrementHelloWorld());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
