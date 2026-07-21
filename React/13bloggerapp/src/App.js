import React, { Component } from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";
import "./App.css";

class App extends Component {

    constructor() {
        super();

        this.state = {
            showBooks: true,
            showBlogs: true,
            showCourses: true
        };
    }

    render() {

        // Element Variable
        let bookComponent;

        if (this.state.showBooks) {
            bookComponent = <BookDetails />;
        }

        return (
            <div className="App">

                <h1>Blogger Application</h1>

                {/* if...else using Element Variable */}
                {bookComponent}

                <hr />

                {/* Ternary Operator */}
                {
                    this.state.showBlogs
                        ? <BlogDetails />
                        : <h3>No Blogs Available</h3>
                }

                <hr />

                {/* Logical && */}
                {
                    this.state.showCourses &&
                    <CourseDetails />
                }

            </div>
        );
    }
}

export default App;