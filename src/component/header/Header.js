import React, {Component} from 'react';
import './Header.css'

import { Link } from 'react-router-dom';

// Material drawer
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

// Material dialog
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide'

// Icons
import {Menu, Lock, LockOpen} from '@material-ui/icons';

// TextField
import TextField from '@material-ui/core/TextField';

function transition(props) {
    return <Slide direction="down" {...props} />;
}

class Header extends Component {
    constructor() {
        super();
        this.state = {
            id: null,
            pw: null,
            left: false,
            open: false
        }
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open
        });
    }

    handleOpen = () => {
        this.setState({
            open: true
        });
    }

    handleClose = () => {
        this.setState({
            open: false
        });
    }
    render() {

        const sideList = (
            <div>
                <List>dfsef</List>
                <Divider />
                <List>wefwefwlebrl</List>
            </div>
        )
        return (
            <div style={{padding: '2.5rem'}}>

                <div className = "sideNav">
                    <Button onClick={this.toggleDrawer('left', true)}><Menu /></Button>
                </div>

                <Drawer open = {this.state.left} onClose = {this.toggleDrawer('left', false)}>
                    <div
                        tabIndex = {1}
                        role = 'button'
                        onClick = {this.toggleDrawer('left', false)}
                        onKeyDown = {this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>

                <div className = "Header">
                    Resument
                </div>

                <div className = "Auth">
                    <Button onClick = {this.handleOpen}><Lock /></Button>
                </div>

                <Dialog
                    open={this.state.open}
                    TransitionComponent={transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id = "alert-dialog-slide-title">
                        {"로그인 하기"}
                    </DialogTitle>
                    <DialogContent>
                            <form noValidate autoComplete="off">
                                <TextField 
                                    required
                                    id = "id"
                                    label = "ID"
                                    margin = "normal"
                                /> <br/>
                                <TextField 
                                    required
                                    id = "pw"
                                    label = "PW"
                                    type = "password"
                                    margin = "normal"
                                />
                            </form>
                    </DialogContent>
                    <DialogActions>
                        <Button>Login</Button>
                        <Button>Sign Up</Button>
                    </DialogActions>
                </Dialog>
                
            </div>
        )
    }
}

export default Header;