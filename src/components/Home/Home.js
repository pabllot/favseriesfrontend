import { Container, Grid, Grow } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Posts from '../Posts/Posts'
import useStyles from '../../styles'

import { getPosts } from '../../actions/posts'

const Home = () => {
  const [currentId, setCurrentId] = useState(null)
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts()) 
  }, [currentId, dispatch])


  return (
    <Grow in>
        <Container>
          <Grid container className={classes.mainContainer} justifyContent='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={12}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>          
          </Grid>
        </Container>
      </Grow>
  )
}

export default Home