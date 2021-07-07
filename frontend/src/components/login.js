import React from 'react'

import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#0069FE",
    color: "#FCFCFC",
    borderRadius: "60px",
    width: "390px",
  },
  root: {
    boxShadow: 'none'
  },
  roomInput: {
    backgroundColor: "#F7F7F7",
    border: "1px solid #E3E3E3",
    borderRadius: "20px 20px 0px 0px",
    width: "100%",
    zIndex: '3',
    position: 'relative',
    padding: "18.5px 24px",
    '&:hover': {
      borderColor: "#AEAEAE",
      zIndex: '5',
      transition: '0.3s',
    },
    '&:focus': {
      outline: 'none',
      borderColor: "#0069FE",
      zIndex: '10',
      transition: '0.3s',
    },
    color: '#2D2D2D',
  },
  nameInput: {
    marginTop: "-1px",
    backgroundColor: "#F7F7F7",
    border: "1px solid #E3E3E3",
    // borderTop: "0px",
    borderRadius: "0px 0px 20px 20px",
    width: "100%",
    zIndex: '3',
    position: 'relative',
    padding: "18.5px 24px",
    '&:hover': {
      borderColor: "#AEAEAE",
      zIndex: '3',
      transition: '0.3s',
    },
    '&:focus': {
      outline: 'none',
      borderColor: "#0069FE",
      zIndex: '10',
      transition: '0.3s',
    },
    color: '#2D2D2D',
  }
})

const Login = (props) => {
  const { classes, state, onRoomChange, onNameChange, onLoginChange } = props

  return (
    <div>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          ChattyRooms
        </Typography>
        <form className={classes.form} noValidate onSubmit={e => { e.preventDefault(); onLoginChange(true) }}>
          <input className={classes.roomInput} type="text" id="room" name="room" placeholder={"Chat name"} value={state.room} autoFocus onChange={ e => {
            onRoomChange(e.target.value)
          }} />

          <input className={classes.nameInput} type="text" id="room" name="room" placeholder={"Your name"} value={state.name} onChange={ e => {
            onNameChange(e.target.value)
          }} />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Enter the chatroom 
          </Button>
        </form>
      </div>
    </div>
  )
}

export default withStyles(styles)(Login)
