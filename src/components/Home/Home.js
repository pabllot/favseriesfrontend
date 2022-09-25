import { Container, Grid, Grow } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import useStyles from '../../styles'

import { getPosts } from '../../actions/posts'

const Home = () => {
  const [currentId, setCurrentId] = useState(null)
  const classes = useStyles()
  const dispatch = useDispatch()
  const [isShowForm, setIsShowForm] = useState(false)

  useEffect(() => {
    dispatch(getPosts()) 
  }, [currentId, dispatch])

  const handleClick = () => {
    setIsShowForm(prev => !prev)
  }


  return (
    <Grow in>
        <Container>
          <Grid container className={classes.mainContainer} justifyContent='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={12}>
              <Posts setCurrentId={setCurrentId} currentId={currentId} />
            </Grid> 
            <Grid >
              <div className={classes.wrapper}>
                <button className={classes.button} onClick={handleClick}>{ !isShowForm ? 'Add New' : 'Close' }</button>
              </div>
              { isShowForm &&
              <Form  setCurrentId={setCurrentId} currentId={currentId} /> }
            </Grid>         
          </Grid>
        </Container>
      </Grow>
  )
}

export default Home