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
      value: '',
      name: '',
      room: 'vacad'
    }
    this.client = new W3CWebSocket('ws://127.0.0.1:8000/ws/chat/' + this.state.room + '/')
    // client = new W3CWebSocket('ws://django-react-chatroom.herokuapp.com/ws/chat/' + this.state.room + '/');

    this.onButtonClicked = (e) => {
      this.client.send(JSON.stringify({
        type: 'message',
        message: this.state.value,
        name: this.state.name
      }))
      this.state.value = ''
      e.preventDefault()
    }
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
    const { classes } = this.props
    return (
      <Container component='main' maxWidth='xs'>
        {this.state.isLoggedIn
          ? <Chatroom state={this.state} setState={this.setState} onButtonClicked={this.onButtonClicked} /> 
          : <Login state={this.state} setState={this.setState} onButtonClicked={this.onButtonClicked} /> }
      </Container>
    )
  }
}
export default App
