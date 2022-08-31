import { makeStyles } from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 10px',
        flexWrap: 'wrap',
        opacity: '0.9'
    },
    heading: {
        color: 'secondary',
        fontFamily: 'Poppins, sans-serif',
        textDecoration:'none' 
    
    },
  
    profile: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '400px'
    },
    userName:{
        display: 'flex',
        alignItems: 'center'
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500]
    },
    signin: {
        width: '10px',
        height: '38px',
        fontSize: '12px',
        padding: '0',
    
        
    },
    p: {
        display: 'none',
    },
    [theme.breakpoints.down('xs')]:{

        mainContainer: {
          flexDirection: 'column-reverse'
        },
        heading: {
            width: '10px',
            fontSize: '27px',
            alignItems: 'center',
            justifyContent: 'center'
        }
      },
      button: {
        fontFamily: 'Poppins, sans-serif',
        padding: '10px',
	    width: '200px',
	    margin: '0 auto',
	    borderRadius: '50px',
	    border: 'none',
	    textTransform: 'uppercase',
	    fontWeight: '700',
	    color: '#fff',
	    background: 'linear-gradient(to right, teal, lightblue)',
	    cursor: 'pointer',
      }
}))