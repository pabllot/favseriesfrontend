import { Avatar, Button, Container, Paper, Typography, Grid } from '@material-ui/core'
import React, { useState } from 'react'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'
import Input from './input'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signin, signup } from '../../actions/auth'

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: ''}

const Auth = () => {
  const classes = useStyles()
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch()
  const [isSignup, setIsSignup] = useState(false)
  const [formData, setFormData] = useState(initialState)
  const navigate = useNavigate()


  const handleShowPassword = () => setShowPassword((prev) => !prev)

  const handleSubmit = (e) => {
    e.preventDefault()

    if(isSignup) {
      dispatch(signup(formData, navigate))
    } else {
      dispatch(signin(formData, navigate))
    }

  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const switchMode = () => {
    setIsSignup((prev) => !prev)
    setShowPassword(false)
  }

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>{!isSignup ? 'Log in' : 'Create Account'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignup && (
                <>
                   <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus xs={6} half/>                
                   <Input name='lastName' label='Last Name' handleChange={handleChange} half/>                
                </>
              )}
              <Input name='email' label='Email Address' handleChange={handleChange} type='email'/>
              <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>
              { isSignup && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password'/>}
          </Grid>
          <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
            {isSignup ? 'Sign up' : 'Sign in'}
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Button type='button'  variant='contained' color='secondary' onClick={switchMode}>
                { isSignup ? 'Click here to Log in' : 'Click here to Create a New Account'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth