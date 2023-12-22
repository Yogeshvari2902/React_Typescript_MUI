import React from "react";



export default class Navbar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};

        //Using STate Correctly
        // Wrong
        // this.state.comment = 'Helloooo';

        // Correct
        // this.setState({comment: 'Helloooo'});
        
    };

    handleSubmit(e) {
       e.preventDefault();
       console.log('You clicked submit.');
    }

    componentDidMount() {
        this.timerID = setInterval(
            //every sec. tuck() called
          () => this.tick(),
          1000
        );
    };
    
      //This is will call only when Navbar component will remove from DOM then timer will stop
      componentWillUnmount() {
        clearInterval(this.timerID);
      };

    tick() {
        this.setState({
            date: new Date()
        });
    };

    activateLasers(){
        console.log("you clickedd!")
    }
    
  
    render() {
        return (
            <>
                <h3>Hello, State!</h3>
                <h3>It is {this.state.date.toLocaleTimeString()}.</h3>
                {/* <h3> {this.state.comment}</h3> */}
                {/* <button onClick={activateLasers}>
                    Activate Lasers
                </button> */}
                {/* <form onSubmit={handleSubmit}>
                    <button type="submit">Submit</button>
                </form> */}
            </>
        )
    }
}


