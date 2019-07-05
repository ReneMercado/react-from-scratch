import React, { Component } from "react";
import { connect } from "react-redux";
import { changeText } from '../store/actions/index';

class FirstPage extends Component {
  handleChangeLoading = () => {
    this.props.handleLoading(true);

    setInterval(() => {
      this.props.handleLoading(false);
    }, 3000);
  };

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div>It's Working for first page</div>
        <div onClick={this.props.onChangeText}>Text from redux store: {this.props.reduxText}</div>
        <button onClick={this.handleChangeLoading}> Set loading true </button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    reduxText: state.redExample.text_value
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeText: () => dispatch(changeText("changed text from dispatch"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstPage);
