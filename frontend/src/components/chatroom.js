import React from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'

import { withStyles } from '@material-ui/core'

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
    margin: theme.spacing(3, 0, 2)
  },
  root: {
    boxShadow: 'none'
  }
})

const Chatroom = (props) => {
  const { classes, state, onButtonClicked, handleMessageChange } = props
  return (
    <div style={{ marginTop: 50 }}>
      Room Name: {state.room}
      <Paper style={{ height: 500, maxHeight: 500, overflow: 'auto', boxShadow: 'none' }}>
        {state.messages.map(message =>
          <React.Fragment key={1}>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar className={classes.avatar}>
                    R
                  </Avatar>
                    }
                title={message.name}
                subheader={message.msg}
              />
            </Card>
          </React.Fragment>
        )}
      </Paper>

      <form className={classes.form} noValidate onSubmit={e => onButtonClicked(e)}>
        <TextField
          id='outlined-helperText'
          label='Make a comment'
          defaultValue='Default Value'
          variant='outlined'
          value={state.message}
          fullWidth
          onChange={e => {
            handleMessageChange(e.target.value)
          }}
        />
        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
        >
          Start Chatting
        </Button>
      </form>
    </div>
  )
}

export default withStyles(styles)(Chatroom)
