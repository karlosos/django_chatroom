import React from 'react'

import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

import { withStyles } from '@material-ui/core/styles'

import { ReactComponent as BlobUpper } from './blobUpper.svg';
import { ReactComponent as BlobLower } from './blobLower.svg';

const styles = theme => ({
  title: {
    color: '#2D2D2D',
    fontSize: '36px',
    fontWeight: 'bold',
    marginTop: '-350px',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'linear-gradient(180deg, #F9F9F9 0%, #FFFFFF 13.54%)',
    padding: '0px 24px',
    borderRadius: '20px',
    overflow: 'hidden',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submitDiv: {
    margin: theme.spacing(3, 0, 2),
    display: 'flex',
    alignItems: 'center'
  },
  submit: {
    backgroundColor: '#0069FE',
    color: '#FCFCFC',
    borderRadius: '60px',
    margin: '0 auto',
    marginBottom: '25px',
    padding: '20px 50px',
    textTransform: 'none',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#3287fe'
    }
  },
  root: {
    boxShadow: 'none'
  },
  roomInput: {
    backgroundColor: '#F7F7F7',
    border: '1px solid #E3E3E3',
    borderRadius: '20px 20px 0px 0px',
    width: '100%',
    zIndex: '3',
    position: 'relative',
    padding: '18.5px 24px',
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
    marginTop: '130px',
  },
  nameInput: {
    marginTop: '-1px',
    backgroundColor: '#F7F7F7',
    border: '1px solid #E3E3E3',
    borderRadius: '0px 0px 20px 20px',
    width: '100%',
    zIndex: '3',
    position: 'relative',
    padding: '18.5px 24px',
    '&:hover': {
      borderColor: '#AEAEAE',
      zIndex: '3',
      transition: '0.3s'
    },
    '&:focus': {
      outline: 'none',
      borderColor: '#0069FE',
      zIndex: '10',
      transition: '0.3s'
    },
    color: '#2D2D2D'
  }
})

const Login = (props) => {
  const { classes, state, onRoomChange, onNameChange, onLoginChange } = props

  return (
    <div>
      <CssBaseline />
      <Paper className={classes.paper}>
        <BlobUpper />
        <Typography component='h1' variant='h5' className={classes.title}>
          React+Django Chatrooms
        </Typography>
        <form className={classes.form} noValidate onSubmit={e => { e.preventDefault(); onLoginChange(true) }}>
          <input
            className={classes.roomInput} autocomplete="off" type='text' id='room' name='room' placeholder='Chat name' value={state.room} autoFocus onChange={e => {
              onRoomChange(e.target.value)
            }}
          />

          <input
            className={classes.nameInput} autocomplete="off" type='text' id='name' name='name' placeholder='Your name' value={state.name} onChange={e => {
              onNameChange(e.target.value)
            }}
          />

          <div className={classes.submitDiv}>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Enter the chatroom
            </Button>
          </div>
          <BlobLower style={{marginBottom: '-5px'}}/>
        </form>
      </Paper>
    </div>
  )
}

export default withStyles(styles)(Login)
