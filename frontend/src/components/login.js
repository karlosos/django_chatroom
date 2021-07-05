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
    margin: theme.spacing(3, 0, 2)
  },
  root: {
    boxShadow: 'none'
  }
})

const Login = (props) => {
    const { classes, children, className, state, setState, onButtonClicked, ...other } = props;
    return (
        <div>
            <CssBaseline />
            <div className={classes.paper}>
              <Typography component='h1' variant='h5'>
                ChattyRooms
              </Typography>
              <form className={classes.form} noValidate onSubmit={value => setState({ isLoggenIn: true})}>
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  id='email'
                  label='Chatroom Name'
                  name='Chatroom Name'
                  autoFocus
                  value={state.room}
                  onChange={e => {
                    setState({ room: e.target.value })
                    this.value = state.room
                  }}
                />
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  name='Username'
                  label='Username'
                  type='Username'
                  id='Username'
                  value={state.name}
                  onChange={e => {
                    setState({ name: e.target.value })
                    this.value = state.name
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
                <Grid container>
                  <Grid item xs>
                    <Link href='#' variant='body2'>
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href='#' variant='body2'>
                      Don't have an account? Sign Up
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
        </div>
    )
}


export default withStyles(styles)(Login)