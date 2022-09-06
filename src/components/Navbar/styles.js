import { makeStyles } from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: '0.95',
        marginBottom: '30px'
    },
    heading: {
        color: 'teal',
        fontFamily: 'Poppins, sans-serif',
        textDecoration:'none' 
    
    },
  
    profile: {
        width: '40px',
        display: 'none',
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

        appBar: {
            justifyContent: 'space-around'
        },
        heading: {
            width: '10px',
            fontSize: '14px',
            alignItems: 'center',
            justifyContent: 'center'
        }
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
	    color: '#fff',
	    background: 'teal',
	    cursor: 'pointer',
       
      },
      logout: {
        fontFamily: 'Poppins, sans-serif',
        padding: '10px',
	    width: '130px',
	    margin: '0 auto',
	    borderRadius: '50px',
	    border: 'none',
	    textTransform: 'uppercase',
	    fontWeight: '700',
	    color: '#fff',
	    background: 'red',
	    cursor: 'pointer',
        marginLeft: '4px'
       
      }
}))