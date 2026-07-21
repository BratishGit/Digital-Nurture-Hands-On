import React, { Component } from "react";
import GitClient from "./GitClient";


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            repositories: []
        };

        this.gitClient = new GitClient();
    }


    componentDidMount() {

        this.gitClient
            .getRepositories("techiesyed")
            .then(data => {

                this.setState({
                    repositories: data
                });

            });

    }


    render() {

        return (
            <div>
                <h1>
                    GitHub Repository List
                </h1>

                <ul>
                    {
                        this.state.repositories.map(
                            repo =>
                            <li key={repo}>
                                {repo}
                            </li>
                        )
                    }
                </ul>

            </div>
        );
    }
}


export default App;