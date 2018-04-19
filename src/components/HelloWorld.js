import * as React from 'react';
import { connect } from 'react-redux';
import { getPost } from '../actions/helloWorld';


class HelloWorld extends React.Component {
  render() {
    let post = <p></p>;
    if (this.props.postLoading) {
      post = <p>Loading...</p>;
    } else if (this.props.error) {
      post = <p>Error: {JSON.stringify(this.props.error)}</p>
    } else if (this.props.post) {
      post = (
        <div>
          <h2>Post {this.props.currentID}: {this.props.post.title}</h2>
          <p>{this.props.post.body}</p>
        </div>
      )
    }

    return (
      <div>
        <button
          id="helloWorldClick"
          type="button"
          onClick={e => {
            this.props.click(e, this.props.currentID);
          }}
        >
          Click Me
        </button>
        {post}

      </div>
    )
  }
}

function mapStateToProps(state) {
  return state.helloWorldReducer;
}

function mapDispatchToProps(dispatch) {
  return {
    click: (e, id) => {
      if (id >= 100) {
        id = 1;
      } else {
        id = id + 1;
      }

      e.preventDefault();
      dispatch(getPost(id));
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
