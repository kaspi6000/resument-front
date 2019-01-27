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
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide'

// Icons
// 사용시에 compil 6초................FUCK
// import {Menu, Lock, LockOpen} from '@material-ui/icons';
import Menu from '@material-ui/icons/Menu';
import Lock from '@material-ui/icons/Lock';
import LockOpen from '@material-ui/icons/LockOpen';

// TextField
import TextField from '@material-ui/core/TextField';

// Radio
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { connect } from 'react-redux';
import { authLogin, authCheck } from '../../action/authAction';

function transition(props) {
    return <Slide direction="down" {...props} />;
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            pw: '',
            name: '',
            gender: '1',
            left: false,
            open: false,
            isSignup: false,
            isAuth: false,
            token: sessionStorage.getItem('RESUMENT_TOKEN')
        }
    }

    componentDidMount() {
        console.log('token', this.state.token);
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
            open: false,
            isSignup: false,
            id: '',
            pw: '',
            name: '',
            gender: '1'
        });
    }

    handleSignup = () => {
        this.setState({
            isSignup: true
        });
    }

    handleChange = key => (event) => {
        this.setState({
            [key]: event.target.value
        });
    }

    handleLogin = async() => {

        const { id, pw } = this.state;
        
        console.log({id});
        console.log({pw})
        await this.props.authLogin(id, pw);
        await this.handleClose();
    }

    handleCheck = () => {

        const token = sessionStorage.getItem('RESUMENT_TOKEN');

        this.props.authCheck(token).then(data => {
            console.log(data);
        });
    }

    handleLogout = () => {
        // localStorage.setItem('Ut', null);
        sessionStorage.removeItem('RESUMENT_TOKEN');
        this.setState({
            token: null
        });
    }
    render() {

        const sideList = (
            <div>
                <List>dfsef</List>
                <Divider />
                <List>wefwefwlebrl</List>
            </div>
        );

        const signup = (
            <div>
                <DialogTitle>
                        {"회원가입 하기"}
                </DialogTitle>
                <DialogContent>
                    <TextField required label = "ID" margin = "normal" onChange = {this.handleChange('id')} /><br/>
                    <TextField required label = "PW" type = "password" margin = "normal" onChange = {this.handleChange('pw')} /><br/>
                    <TextField required label = "NAME" margin = "normal" onChange = {this.handleChange('name')} /><br/>
                    <RadioGroup
                        row
                        name="gender"
                        aria-label="GENDER"
                        value={this.state.gender}
                        onChange={this.handleChange('gender')}
                    >
                        <FormControlLabel value = "1" control = {<Radio />} label = "남자" />
                        <FormControlLabel value = "2" control = {<Radio />} label = "여자" />
                        <FormControlLabel value = "3" control = {<Radio />} label = "둘다 아니야!" />
                    </RadioGroup>
                </DialogContent>
                {this.state.id} : {this.state.pw} : {this.state.name} : {this.state.gender}
                <DialogActions>
                    <Button>SignUp</Button>
                </DialogActions>
            </div>
        );

        const login = (
            <div>
                <DialogTitle>
                        {"로그인 하기"}
                </DialogTitle>
                <DialogContent>
                    <TextField required label = "ID" margin = "normal" onChange = {this.handleChange('id')} /> <br/>
                    <TextField required label = "PW" type = "password" margin = "normal" onChange = {this.handleChange('pw')} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleLogin}>Login</Button>
                    <Button onClick={this.handleSignup}>Sign Up</Button>
                </DialogActions>
            </div>
        );

        return (
            <div style={{padding: '2.5rem'}}>

                <div className = "sideNav">
                    <Button onClick={this.toggleDrawer('left', true)}><Menu /></Button>
                </div>

                <Drawer open = {this.state.left} onClose = {this.toggleDrawer('left', false)}>
                    <div
                        tabIndex = {0}
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

                <div>
                    <Button onClick = {this.handleCheck}>CHECK</Button>
                </div>

                <div className = "Auth">
                    {
                        this.state.token !== null ?
                        (
                            <Button onClick = {this.handleLogout}><LockOpen /></Button>
                        )
                        :
                        (
                            <Button onClick = {this.handleOpen}><Lock /></Button>
                        )
                    }
                </div>

                <Dialog
                    open={this.state.open}
                    TransitionComponent={transition}
                    onClose={this.handleClose}
                >
                    {this.state.isSignup ? signup : login}
                </Dialog>
                
            </div>
        )
    }
}

// export default Header;

const mapToState = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        isAuthenticating: state.auth.isAuthenticating,
    };
}

const mapToProps = (dispatch) => {
    return {
        authLogin,
        authCheck,
    };
}

export default connect(mapToState, mapToProps)(Header);