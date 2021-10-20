import {  makeStyles } from '@mui/styles';
import { Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar, Avatar } from '@mui/material';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { useHistory, useLocation } from 'react-router-dom';
import { format } from 'date-fns';

const drawerWidth = 240;

const useStyle = makeStyles((theme) => {
  return {
    page:{
        background: '#f9f9f9',
        width: '100%',
        padding: theme.spacing(3)
    },
    drawer:{
        width: drawerWidth
    },
    drawerPaper:{
        width: drawerWidth
    },
    root:{
        display: 'flex'
    },
    active:{
        background: '#f4f4f4 !important'
    },
    title:{
        padding: theme.spacing(2)
    },
    appbar:{
        width: `calc(100% - ${drawerWidth}px) !important`
    },
    toolbar: {
        marginTop: 60
    },
    date:{
        flexGrow: 1
    },
    avatar:{
        marginLeft: theme.spacing(2)
    }
  }
})

const Layout = ({ children }) => {
    const classes = useStyle();
    const redirect = useHistory();
    const location = useLocation()
    const menuItems =[
        {
            text: 'My Notes',
            icon:  <SubjectOutlined  color="secondary"/>,
            path: '/'
        },
        {
            text: 'Create Note',
            icon:  <AddCircleOutlineOutlined  color="secondary"/>,
            path: '/create'
        }
    ]
     
    return ( 
        <div className={classes.root}>
            <AppBar
              elevation={0}
              className={classes.appbar}
            >
                <Toolbar>
                    <Typography className={classes.date}>
                        Today is the { format(new Date(),'do MMMM Y') }
                    </Typography>
                    <Typography>
                        Mario
                    </Typography>
                    <Avatar src="/mario-av.png" className={classes.avatar}/>
                </Toolbar>
            </AppBar>
            <Drawer
                className={ classes.drawer }
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }}
            >
                <div>
                    <Typography variant="h5" className={classes.title}>
                        Ninja Notes
                    </Typography>
                </div>
                <List>
                    {menuItems.map(item =>(
                        <ListItem 
                           button 
                           key={item.text}
                           onClick={() => redirect.push(item.path)}
                           className={location.pathname == item.path ? classes.active : null}
                           >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <div className={classes.page}>
                  <div className={classes.toolbar}>
                     { children }
                  </div> 
            </div>
        </div>
     );
}
 
export default Layout;