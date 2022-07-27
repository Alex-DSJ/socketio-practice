import React from 'react'
import { connect } from 'react-redux';

const Message = props => {

  const { username } = props;
  const [ message, setMessage ] = React.useState('');
  const [ room, setRoom ] = React.useState('');
  const [ messages, setMessages ] = React.useState([]);

  props.socket.on('message-added', msg => {
    setMessages([ ...messages, msg ])
  });

  const sendMessage = () => {
    props.socket.emit('add-message', { user: username, room, message })
  }

  const joinRoom = () => {
    props.socket.emit('join-room', room, (msg) => {
      console.log('callback function invoked: ', msg)
      setMessages([ ...messages, { message: msg, user: username } ])
    })
  }

  return (
    <div style={{ display: 'block' }}>
      <h2>{`Welcome, ${username}`}</h2>
      <h2>{`Socket.id: ${props.socket.id}`}</h2>
      <input
        type='text'
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>
        send
      </button>
      <input
        type='text'
        value={room}
        onChange={e => setRoom(e.target.value)}
      />
      <button onClick={joinRoom}>
        join
      </button>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{`message: ${msg.message}, from: ${msg.user}`}</li>
        ))}
      </ul>
    </div>
  )
}

export default connect(
  state => ({ general: state.general })
)(Message)