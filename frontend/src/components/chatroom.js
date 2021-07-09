import React from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import ScrollToBottom from 'react-scroll-to-bottom';
import { Scrollbars } from 'react-custom-scrollbars';

import { withStyles } from '@material-ui/core'

const styles = theme => ({
  title: {
    color: '#2D2D2D',
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'linear-gradient(180deg, #F9F9F9 0%, #FFFFFF 50.54%)',
    padding: '0px 24px',
    borderRadius: '20px',
    overflow: 'hidden',
  },
  topBar: {
    backgroundColor: 'white',
    padding: '20px',
    margin: '0px -24px',
    borderRadius: '20px',
    width: '396px',
  },
  messages: {
    height: '500px',
    maxHeight: '500px',
    overflow: 'auto',
    boxShadow: 'none',
    marginTop: '20px',
  },
  inputBlock: {
    display: 'flex',
    whiteSpace: 'nowrap',
    overflow: 'auto',
    marginBottom: '24px',
  },
  messageInput: {
    backgroundColor: '#F7F7F7',
    border: '1px solid #E3E3E3',
    borderRadius: '20px',
    width: '100%',
    zIndex: '3',
    position: 'relative',
    padding: '14px 24px',
    paddingRight: '53px',
    '&:hover': {
      borderColor: '#AEAEAE',
      zIndex: '5',
      transition: '0.3s'
    },
    '&:focus': {
      outline: 'none',
      borderColor: '#0069FE',
      zIndex: '10',
      transition: '0.3s'
    },
    color: '#2D2D2D',
  },
  submitButton: {
    marginLeft: '-45px',
    zIndex: '20',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.0)',
      color: '#0069FE',
      // TODO: change color also when messageInput is on focus
      // https://stackoverflow.com/questions/15727923/focusing-on-an-element-changes-anothers-css
    },
    padding: '0px',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  messageOtherUser: {
    marginBottom: '4px',
    backgroundColor: '#E9F2FF',
    borderRadius: '9px',
    padding: '9px',
    scrollbarWidth: 'none',  
    // display: 'inline-block',
    clear: 'both',
    float: 'left',
  },
  messageCurrentUser: {
    marginBottom: '4px',
    backgroundColor: '#DCE5F2',
    borderRadius: '9px',
    padding: '9px',
    scrollbarWidth: 'none',  
    // display: 'inline-block',
    clear: 'both',
    float: 'right',
  },
  messageUser: {
    color: '#1658A4',
    fontSize: '12px',
    fontWeight: 'bold',
  }
})

const Chatroom = (props) => {
  const { classes, state, onButtonClicked, onMessageChange } = props
  return (
    <div>
    <CssBaseline />
    <Paper className={classes.paper}>

    <div>
      <div className={classes.topBar}>
        <Typography component='h1' variant='h5' className={classes.title}>
         {state.room} 
        </Typography>
      </div>
      <div style={{overflow: 'hidden'}} className={'messages'}>
        <ScrollToBottom className={classes.messages}>
          {state.messages.map(message =>
            <React.Fragment key={1}>
              <div className={message.name === state.name ? classes.messageCurrentUser : classes.messageOtherUser }>
                  {message.name !== state.name ? 
                  <div className={classes.messageUser}> {message.name} </div>
                  : ''}
                  <div className={classes.messageValue}> {message.msg} </div>
              </div>
            </React.Fragment>
          )}
        </ScrollToBottom>
      </div>

      <form className={classes.form} noValidate onSubmit={e => onButtonClicked(e)}>
        <div className={classes.inputBlock}>
        <input
            className={classes.messageInput} autoComplete="off" type='text' id='message' name='message' placeholder='' value={state.message} onChange={e => {
              onMessageChange(e.target.value)
            }}
        />
        <IconButton type='submit' disableRipple  className={classes.submitButton} >
          <SendIcon />
        </IconButton>
        </div>
      </form>
    </div>
    </Paper>
    </div>
  )
}

export default withStyles(styles)(Chatroom)
