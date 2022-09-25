import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    opacity: '0.9',
    borderRadius: 15,
    maxWidth: '500px',
    margin: 'auto'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    
    
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    overflow: 'hidden'
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  button: {
  fontFamily: 'Poppins, sans-serif',
  padding: '10px',
  margin: '0 auto',
  marginBottom: '10px',
  borderRadius: '50px',
  border: '2px solid teal',
  textTransform: 'uppercase',
  fontWeight: '700',
  color: 'teal',
  background: 'white',
  cursor: 'pointer',
  }
}));