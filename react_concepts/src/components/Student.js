import React from "react";

class Student extends React.Component{
    render() {
        return(
            <>
                <h3>Hello Props, {this.props.name}</h3>
                {/* <h2>It is {this.props.date.toLocaleTimeString()}.</h2> */}
            </>
        )
    }
}

export default Student;