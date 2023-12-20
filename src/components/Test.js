import React from 'react'
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';

class Test extends React.Component {
    state = {  } 

    // 2
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        return (
          <div>
            {isLoggedIn
              ? <LogoutButton onClick={this.handleLogoutClick} />
              : <LoginButton onClick={this.handleLoginClick} />
            }
          </div>
        );
      }


    // 1
    // render() {
    //     const isLoggedIn = this.state.isLoggedIn;
    //     return (
    //       <div>
    //         <br/>
    //         The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    //       </div>
    //     );
    //   }
}
 
export default Test;