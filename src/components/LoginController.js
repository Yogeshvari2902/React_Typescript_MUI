import React from 'react'
import Greetings from './Greetings';
import LogutButton from './LogoutButton';
import LoginButton from './LoginButton';

class LoginController extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
        this.state = {isLoggedIn: true}
    }

    handleLogoutClick(){
        this.setState({isLoggedIn: true})
    }

    handleLoginClick(){
        this.setState({isLoggedIn: false})
    }
    state = {  }
    render() { 
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if(isLoggedIn){
            button = <LogutButton onClick={this.handleLogoutClick} />
        }
        else{
            <LoginButton onClick={this.handleLoginClick} />
        }

        return ( 
            <>
                <br/> <br/>
                <Greetings isLoggedIn={isLoggedIn} />
                <br/>
                {button}

            </>
         );
    }
}
 
export default LoginController;