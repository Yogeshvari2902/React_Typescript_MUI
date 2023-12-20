import React from 'react'
class LogutButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( 
            <>
                <button onClick={this.onClick}>
                    Logout
                </button>
            </>
         );
    }
}
 
export default LogutButton;