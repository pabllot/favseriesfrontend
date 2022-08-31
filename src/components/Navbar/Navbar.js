import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core'
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode'



const Navbar = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')))
  const location = useLocation()

  const logout = () => {
    dispatch({ type: 'LOGOUT'})
    setUser(null)
    window.location.reload()
  }

  useEffect(() => {
    const token = user?.token

    if(token) {
      const decodedToken = decode(token);

      if(decodedToken.exp * 1000 < new Date().getTime()) logout();
      setUser(JSON.parse(localStorage.getItem('profile')))
    }
  }, [location])

    
    return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
        <div className={classes.brandContainer}>
            <Typography component={Link} to='/' className={classes.heading} variant='h3' align='center'>urfav.series</Typography>
        </div>
        <Toolbar className={classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.picture}></Avatar>
                    <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                </div>
            ) : (
                <Button component={Link} to='/auth' className={classes.button} variant='contained' color='primary'>Sign in</Button>
            )}

                  {user ? (
                  <Button fullWidth variant='contained' onClick={logout} className={classes.button}>Log out</Button>
                  ) : <p className={classes.p}>-</p>}
        
        </Toolbar>
     
    </AppBar>
  )
}

export default Navbar