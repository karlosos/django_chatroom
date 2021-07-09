import React, { Component } from 'react'
import { w3cwebsocket as W3CWebSocket } from 'websocket'

import Chatroom from './components/chatroom'
import Login from './components/login'

import Container from '@material-ui/core/Container'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      messages: [],
      message: '',
      name: '',
      room: 'default'
    }
    this.client = new W3CWebSocket('ws://127.0.0.1:8000/ws/chat/' + this.state.room + '/')
    // client = new W3CWebSocket('ws://django-react-chatroom.herokuapp.com/ws/chat/' + this.state.room + '/');
  }

  handleButtonClicked = (e) => {
    e.preventDefault()
    this.client.send(JSON.stringify({
      type: 'message',
      message: this.state.message,
      name: this.state.name
    }))
    this.handleMessageChange('')
  }

  handleLoginChange = (flag) => {
    this.setState({ isLoggedIn: flag })
  }

  handleRoomChange = (value) => {
    if (value.charAt(0) !== '#') {
      value = '#' + value
    }
    this.setState({ room: value })
  }

  handleNameChange = (value) => {
    this.setState({ name: value })
  }

  handleMessageChange = (value) => {
    this.setState({ message: value })
  }

  componentDidMount () {
    this.client.onopen = () => {
      console.log('WebSocket Client Connected')
    }
    this.client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data)
      console.log('got reply! ', dataFromServer.type)
      if (dataFromServer) {
        this.setState((state) =>
          ({
            messages: [...state.messages,
              {
                msg: dataFromServer.message,
                name: dataFromServer.name
              }]
          })
        )
      }
    }
  }

  render () {
    return (
      <Container component='main' maxWidth='xs'>
        {this.state.isLoggedIn
          ? <Chatroom
              state={this.state}
              onButtonClicked={this.handleButtonClicked}
              onMessageChange={this.handleMessageChange}
            />
          : <Login
              state={this.state}
              onRoomChange={this.handleRoomChange}
              onNameChange={this.handleNameChange}
              onLoginChange={this.handleLoginChange}
            />}
      </Container>
    )
  }
}
export default App
