import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import useStyles from './styles'
import { createPost, updatePost } from '../../actions/posts'

const Form = ({ setCurrentId, currentId }) => {
  const [postData, setPostData] = useState({
     title: '', description: '', tags: '', selectedFile: ''
  })
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId ) : null)
  const classes = useStyles()
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('profile'))

  useEffect(() => {
    if(post) setPostData(post)
  }, [post])
  
  const clear = () => {
    setPostData({
      title: '', description: '', tags: '', selectedFile: ''
    }) 
    setCurrentId(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === null) {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name  }));
      clear();
      window.location.reload()
    }
  }

  if(!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant='h6' align='center'>
          Please Sign in to add your favorite series
        </Typography>
      </Paper>
    )
  }
  

  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant='h6'className={classes.h6}>{currentId ? 'Editing' : 'Adding'} your favorite serie</Typography>
          <TextField  name='title' variant='outlined' label='Title' fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value})} />
          <TextField  name='description' variant='outlined' label='Description' fullWidth value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value})} />
          <TextField  name='tags' variant='outlined' label='Tags' fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value})} />
          <div className={classes.fileInput}>
            <FileBase 
               type='file'
               multiple={false}
               onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}
            />
          </div>
          <Button className={classes.button} variant='contained' color='primary' size='large' type='submit' fullWidth >Submit</Button>
          <Button className={classes.button} size='small' onClick={clear} fullWidth >Clear</Button>
      </form>
    </Paper>
  )
}

export default Form