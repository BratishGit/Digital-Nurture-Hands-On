import React from "react";
class CurrencyConverter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            rupees:" ",
            euro:" "
        };
    }
    handleChange =(event) =>{
        this.setState({
            rupees:event.target.value
        });
    }
    handelSubmit =() =>{
        const euroValue= this.state.rupees/90;
        this.setState({
            euro:euroValue.toFixed(2)
        });
    }
    render(){
        return(
            <div>
                <h2>Currency Converter</h2>
                <input
                type="number"
                placeholder="Enter Rupees"
                value={this.state.rupees}
                onChange={this.handleChange}
                />
                <button onClick={this.handelSubmit}>
                    Convert
                </button>
                <h3> Euro : €{this.state.euro}</h3>
            </div>
        );
    }
}
export default CurrencyConverter;