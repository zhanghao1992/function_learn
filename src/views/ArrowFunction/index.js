import React, { Component } from 'react';
import User from './user'

export default class ArrowFunction extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: 'Cory' }, 
        { id: 2, name: 'Meg' }, 
        { id: 3, name: 'Bob' }
      ]
    };
  }

  deleteUser = id => {
    this.setState(prevState => {
      return { 
        users: prevState.users.filter( user => user.id !== id)
      }
    })
  }

  renderUser = user => {
    return <User key={user.id} user={user} onDeleteClick={this.deleteUser} />;
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        <ul>
        { 
          this.state.users.map(this.renderUser)
        }
        </ul>
      </div>
    );
  }
}