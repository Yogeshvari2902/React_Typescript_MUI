import React from 'react'
class FormFlavor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};
      
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({value: e.target.value})
    }
    handleSubmit(e){
        alert('Your favorite flavor is: ' + this.state.value);
        e.preventDefault();
    }

    render() { 
        return ( 
            <>
                <br/>
               <form onSubmit={this.handleSubmit}>
                 <label>
                    Pick your favorite flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                  </label>
                  <input type="submit" value="Submit" />
                </form>
            </>
         );
    }
}
 
export default FormFlavor;