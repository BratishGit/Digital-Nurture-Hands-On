import React, { Component } from "react";

class ComplaintRegister extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employeeName: "",
            complaint: ""
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const referenceNumber = Math.floor(
            100000 + Math.random() * 900000
        );

        alert(
            `Thanks ${this.state.employeeName}\n\nYour complaint was submitted successfully.\nReference Number: ${referenceNumber}`
        );

        this.setState({
            employeeName: "",
            complaint: ""
        });
    };

    render() {
        return (
            <div>

                <h2>Complaint Register</h2>

                <form onSubmit={this.handleSubmit}>

                    <label>
                        Employee Name:
                    </label>

                    <br />

                    <input
                        type="text"
                        name="employeeName"
                        value={this.state.employeeName}
                        onChange={this.handleChange}
                        required
                    />

                    <br /><br />

                    <label>
                        Complaint:
                    </label>

                    <br />

                    <textarea
                        name="complaint"
                        rows="5"
                        cols="40"
                        value={this.state.complaint}
                        onChange={this.handleChange}
                        required
                    />

                    <br /><br />

                    <button type="submit">
                        Submit
                    </button>

                </form>

            </div>
        );
    }
}

export default ComplaintRegister;