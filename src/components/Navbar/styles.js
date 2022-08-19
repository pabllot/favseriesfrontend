import { makeStyles } from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 10px',
        flexWrap: 'wrap'
    },
    heading: {
        color: 'secondary',
        textDecoration:'none' 
    
    },
  
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
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
      }
}))