import React from 'react'

export const Login = props => {

  const [ username, setUsername ] = React.useState('');

  return (
    <React.Fragment>
      <input
        type='text'
        onChange={e => setUsername(e.target.value)}
        value={username}
      />
      <button onClick={() => props.loginUser(username)}>
        Login
      </button>
    </React.Fragment>
  )
}
