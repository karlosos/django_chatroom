import React from 'react'


import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
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
  const { classes, children, className, state, onButtonClicked, ...other } = props;
    return (
        <div style={{ marginTop: 50 }}>
            Room Name: {this.props.room}
            <Paper style={{ height: 500, maxHeight: 500, overflow: 'auto', boxShadow: 'none' }}>
              {this.props.messages.map(message => <>
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
              </>)}
            </Paper>

            <form className={classes.form} noValidate onSubmit={this.props.onButtonClicked}>
              <TextField
                id='outlined-helperText'
                label='Make a comment'
                defaultValue='Default Value'
                variant='outlined'
                value={this.state.value}
                fullWidth
                onChange={e => {
                  this.setValue = e.target.value
                  this.value = this.props.value
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