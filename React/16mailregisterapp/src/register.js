import React, {Component} from "react";
 class Register extends Component{
    constructor(props){
        super(props);

        this.state={
            name: "",
            email: "",
            password:"",
            errors: {}
        };
    }
    handleChange =(event) =>{
        const{name, value} = event.target;
        this.setState({
            [name]: value
        });
    };
    validateForm =() =>{
        let errors={}
        let valid = true;

        if(this.state.name.length<5){
            errors.name="Name shouls have atleast 5 characters";
            valid =false;
        }
        if(
            !this.state.email.includes("@") || !this.state.email.includes(".")
        ){
            errors.email="Enter a valid email";
            valid=false;
        }
        if(this.state.password.length<8){
            errors.password ="Password should have atleast 8 characters";
            valid=false;
        }
        this.setState({errors});
        return valid;
    };
    handleSubmit =(event) =>{
        event.preventDefault();
        if(this.validateForm()){
            alert("Registration Successful");
        }
    };
    render(){
        return(
            <div style={{margin:"30px"}}>
                <h2>Registration Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name</label><br />
                        <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        />
                        <br />
                        <span style={{color:"red"}}>
                            {this.state.errors.name}
                        </span>
                    </div>
                    <br />
                    <div>
                        <label> Email:</label> <br />
                        <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        />
                        <br/>
                        <span style={{color:"red"}}>
                            {this.state.errors.email}
                        </span>
                    </div>
                    <br />
                    <div>
                        <label>Password:</label> <br/>
                        <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        />
                        <br />
                        <span style={{color:"red"}}>
                            {this.state.errors.password}
                        </span>
                    </div>
                    <br />
                    <button type="submit">Register</button>
                </form>
            </div>
        );
    }
 }
 export default Register;