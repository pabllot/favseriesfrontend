import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  heading: {
    color: 'rgba(60,60,69, 1)',
  },
  image: {
    marginLeft: '15px',
  },
  mainContainer: {
    flexDirection: 'column-reverse',
  },
  button: {
    fontFamily: 'Poppins, sans-serif',
    padding: '10px',
    width: '130px',
    margin: '0 auto',
    borderRadius: '50px',
    border: 'none',
    textTransform: 'uppercase',
    fontWeight: '700',
    color: 'teal',
    background: 'white',
    cursor: 'pointer',
   
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px'

  },
 
  [theme.breakpoints.down('xs')]:{

    mainContainer: {
      flexDirection: 'column-reverse',
    }}

  
}));