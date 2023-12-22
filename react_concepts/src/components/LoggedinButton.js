import React from "react";

class LoggedinButton extends React.Component{
    handleCLick = () => {
        console.log("hey its this! ", this)
    }
    render() {
        return(
            <>
                <br/> <br/>
                <button onClick={this.handleCLick}>
                    Click me
                </button>
                {/* This syntax is enabled by default in Create React App. */}
            </>
        )
    }
}
export default LoggedinButton;


//  If you aren’t using class fields syntax, you can use an arrow function in the callback:

// handleClick() {
//     console.log('this is:', this);
// }

//  <button onClick={() => this.handleClick()}>
//     Click me
// </button> 




{/* <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button> */}
{/* <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button> */}