import { AddCircleOutlineOutlined, StickyNote2Outlined } from "@mui/icons-material";
import { AppBar, Avatar, Box, Container, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;
const drawerLinkList = [
    {
        label:'My Notes',
        icon:<StickyNote2Outlined/>,
        path:'/'
    },
    {
        label:'Create',
        icon:<AddCircleOutlineOutlined/>,
        path:'/create'
    }
];


const Layout = ({children}) => {
    const navigate = useNavigate();
    
    return ( 
        <Container sx={{display:'flex'}}>
            <Drawer
                variant="permanent"
                anchor="left"
                sx={{
                    width:drawerWidth,
                    '& .MuiDrawer-paper':{
                        width:drawerWidth
                    }
                }}
            >
                <div>
                    <Typography variant="h5" textAlign={'center'} marginY={2}>
                        Notes Hub
                    </Typography>
                </div>
                <List>
                    {drawerLinkList.map((drawerLink)=>(
                        <ListItem key={drawerLink.label}>
                            <ListItemButton
                                onClick={()=>navigate(drawerLink.path)}
                            >
                                <ListItemIcon>
                                    {drawerLink.icon}
                                </ListItemIcon>
                                <ListItemText primary={drawerLink.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                
            </Drawer>
            <AppBar
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="body" flexGrow={1}>
                        Hello There!
                    </Typography>
                    <Avatar src="logo512.png"/>
                </Toolbar>
            </AppBar>
            <Box flexGrow={1}>
                <Toolbar/>
                {children}
            </Box>
        </Container>
     );
}
 
export default Layout;