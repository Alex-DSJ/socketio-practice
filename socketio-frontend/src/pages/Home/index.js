import React, { Component } from 'react';
import { connect } from 'react-redux';
import { io } from 'socket.io-client';
import { setUser, setGeneral, setSocket } from '../../redux/actions';
import { Login } from '../Login';
import Message from '../Message';

class Home extends Component {
  constructor(props) {
    super(props);
    
    this.socket = io('http://localhost:8080');
    this.socket.on('connect', () => {
      console.log('socket connected with given id: ', this.socket.id);
    });

    this.state = {
      username: '',
      isLoggedIn: false,
      message: '',
      messages: []
    }
  }

  loginUser = username => {
    this.socket.connect();
    this.setState({ username, isLoggedIn: true });
  }

  render() {
    return (
      <div
        style={{
          padding: "200px 50px",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {this.state.isLoggedIn ? (
          <Message
            username={this.state.username}
            socket={this.socket}
          />
        ) : (
          <Login
            loginUser={this.loginUser}
          />
        )}
      </div>
    )
  }
}

export default connect(
  state => ({ user: state.user, general: state.general, socket: state.socket }),
  { setGeneral, setUser, setSocket }
)(Home);
