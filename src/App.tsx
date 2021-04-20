import React, { Component, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { MainPage } from './components/MainPage/MainPage';
import { setSearchField, requestUsers } from './actions';
import './App.css';

export type User = {
  name: string;
  id: number;
  email: string;
};

type State = {
  searchUsers: {searchField: string},
  requestUsers: {
    users: User[], 
    isPending: boolean
  },
}

const mapStateToProps = (state: State) => {
  return {
    searchField: state.searchUsers.searchField,
    users: state.requestUsers.users,
    isPending: state.requestUsers.isPending
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onSearchChange: (event: ChangeEvent<HTMLInputElement>) => dispatch(setSearchField(event.target.value)),
    onRequestUsers: () => dispatch(requestUsers())
  }
}

class App extends Component {
  render() {
    return (
        <MainPage { ...this.props }/>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)