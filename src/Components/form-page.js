import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions/actionTypes";
import { initIngredients } from "../store/actions/index";

class FormPage extends Component {
  state = {
    user: { name: "", email: "" }
  };

  componentDidMount() {
    console.log("here we can set http requests");
    this.props.onFetchData();
  }

  onHandleChangeUser = (event, propName) => {
    let newState = {
      ...this.state,
      user: {
        ...this.state.user
      }
    };
    newState.user[propName] = event.target.value;
    console.log(newState);
    this.setState(newState);
  };

  render() {
    let { name, email } = this.state.user;

    return (
      <div>
        <form
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          <input
            type="text"
            placeholder="Write Name"
            value={name}
            onChange={event => this.onHandleChangeUser(event, "name")}
          />
          <input
            type="text"
            placeholder="Write Email"
            value={email}
            onChange={event => this.onHandleChangeUser(event, "email")}
          />
          <button
            onClick={event => {
              event.preventDefault();
              this.props.onAddUser(this.state.user);
            }}
          >
            Create User
          </button>
        </form>
        <ul>
          {this.props.users.map(user => {
            return <li> {user.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddUser: user => dispatch({ type: actionTypes.ADD_USER, user: user }),
    onFetchData: () => dispatch(initIngredients())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormPage);
