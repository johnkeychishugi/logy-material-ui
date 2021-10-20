import {  makeStyles } from '@mui/styles';
import { Typography, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';

const drawerWidth = 240;

const useStyle = makeStyles({
    page:{
        background: '#f9f9f9',
        width: '100%'
    },
    drawer:{
        width: drawerWidth
    },
    drawerPaper:{
        width: drawerWidth
    },
    root:{
        display: 'flex'
    }
})

const Layout = ({ children }) => {
    const classes = useStyle();
    const redirect = useHistory();
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
            <Drawer
                className={ classes.drawer }
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }}
            >
                <div>
                    <Typography variant="h5">
                        Ninja Notes
                    </Typography>
                </div>
                <List>
                    {menuItems.map(item =>(
                        <ListItem 
                           button 
                           key={item.text}
                           onClick={() => redirect.push(item.path)}
                           >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <div className={classes.page}>
                 { children }
            </div>
        </div>
     );
}
 
export default Layout;