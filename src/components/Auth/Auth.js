import { Avatar, Button, Container, Paper, Typography, Grid } from '@material-ui/core'
import React, { useState } from 'react'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'
import Input from './input'
import { GoogleLogin, googleLogout } from '@react-oauth/google'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import jwt_decoded from 'jwt-decode'
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
    handleShowPassword(false)
  }

  const googleSuccess = async (res) => {
    const result = jwt_decoded(res?.credential)

    try {
      dispatch({ type: 'AUTH', data: { result }})

      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>{isSignup ? 'Sign in' : 'Sign in'}</Typography>
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
          <Button  fullWidth  color='inherit'>
            {isSignup ? (
              <div>you're in</div>
            ) : (
              <GoogleLogin
              onSuccess={(googleSuccess)}
              onError={() => console.log('Errrrrou')} />
            )}
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : 'Do not have an account? Sign up'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth