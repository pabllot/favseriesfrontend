import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  all: {
     fontFamily: 'Poppins, sans-serif',
    },
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
    
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    opacity: '0.9'
    
    
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
    
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
    opacity: '0.7'
  
  },
  title: {
    padding: '0 16px',
    fontWeight: '700',

  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',

  },
  desc: {
    maxHeight: '150px',
    overflow: 'auto',
    fontFamily: 'Poppins, sans-serif',
  }
});