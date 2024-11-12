import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.css';

function BurgerMenu() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setIsDrawerOpen(open);
    };

    return (
        <>
            <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                <List className="drawer-list">
                    <ListItem button onClick={toggleDrawer(false)}>
                        <ListItemText primary="Accueil" />
                    </ListItem>
                    <ListItem button onClick={toggleDrawer(false)}>
                        <ListItemText primary="Boutique" />
                    </ListItem>
                    <ListItem button onClick={toggleDrawer(false)}>
                        <ListItemText primary="Concerts" />
                    </ListItem>
                    <ListItem button onClick={toggleDrawer(false)}>
                        <ListItemText primary="Albums" />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}

export default BurgerMenu;
