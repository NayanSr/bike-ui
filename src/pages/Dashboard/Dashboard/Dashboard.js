import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Outlet } from 'react-router-dom';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useauth';

const drawerWidth = 340;

function Dashboard(props) {
    const { window } = props;
    const { admin } = useAuth();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const { logout } = useAuth();

    const drawer = (
        <div>
            <Toolbar />
            <Divider />

            <Link to='/dashboard' style={{ textDecoration: 'none', marginLeft: '2px ' }} ><Button sx={{ mt: 1 }} >Dashboard</Button></Link> <br />

            <Link to='/dashboard/payment' style={{ textDecoration: 'none', marginLeft: '2px ' }} ><Button sx={{ mt: 1 }} >Payment</Button></Link> <br />

            <Link to='/dashboard/myorder' style={{ textDecoration: 'none', marginLeft: '2px ' }} ><Button sx={{ mt: 1 }} >My Order</Button></Link><br />

            <Link to='/dashboard/review' style={{ textDecoration: 'none', marginLeft: '2px ' }} ><Button sx={{ mt: 1 }} >Review</Button></Link><br />

            <Button onClick={logout} sx={{ mt: 1 }} >Logout</Button>


            <Divider />
            {admin && <Box>
                <Link to='/pay' style={{ textDecoration: 'none' }} ><Button sx={{ mt: 1 }} >Manage All Order</Button></Link><br />

                <Link to='/dashboard/addproduct' style={{ textDecoration: 'none' }} ><Button sx={{ mt: 1 }} >Add A Product</Button></Link><br />

                <Link to='/dashboard/makeadmin' style={{ textDecoration: 'none' }} ><Button sx={{ mt: 1 }} >Make Admin</Button></Link><br />

                <Link to='/pay' style={{ textDecoration: 'none' }} ><Button sx={{ mt: 1 }} >Manage Products</Button></Link><br />

                <Link to='/pay' style={{ textDecoration: 'none' }} ><Button sx={{ mt: 1 }} >Logout</Button></Link>

            </Box>
            }

            <List>
                {['Inbox', 'Starred'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />



                <Outlet />


            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
