import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core'
import useStyles from './styles'
import { GoogleLogin, googleLogout } from '@react-oauth/google'
import { useDispatch } from 'react-redux'
import jwt_decoded from 'jwt-decode'
import { useNavigate } from 'react-router-dom'



const Navbar = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')))
  const navigate = useNavigate()

  
  
  useEffect(() => {
    const resu = user?.credential

    setUser(JSON.parse(localStorage.getItem('profile')))
  
  }, [setUser])

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
    <AppBar className={classes.appBar} position='static' color='inherit'>
        <div className={classes.brandContainer}>
            <Typography component={Link} to='/' className={classes.heading} variant='h3' align='center'>FavSerieS</Typography>
        </div>
        <Toolbar className={classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.given_name} src={user.result.picture}>oi</Avatar>
                    <Typography className={classes.userName} variant='h6'>{user.result.given_name}</Typography>
                    <Button variant='contained' className={classes.logout} color='secondary'></Button>
                </div>
            ) : (
                <Button component={Link} to='/auth' className={classes.signin} variant='contained' color='primary'>Sign in</Button>
            )}
               <Button fullWidth className='google'>
            {user ? (
              <div>you're in</div>
            ) : (
              <GoogleLogin
              onSuccess={googleSuccess}
              onError={() => console.log('Errrrrou')} />
            )}
          </Button>
        </Toolbar>
     
    </AppBar>
  )
}

export default Navbar