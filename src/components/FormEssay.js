import React from 'react'

class FormEssay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write an essay about your favorite DOM element.'
        };
      
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({value: e.target.value})
    }
    handleSubmit(e){
        alert('An Essay was submitted: ' + this.state.value);
        e.preventDefault();
    }

    render() { 
        return ( 
            <>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <label> Essay:
                        <textarea value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </>
         );
    }
}
 
export default FormEssay;