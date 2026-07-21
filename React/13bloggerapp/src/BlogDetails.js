import React from "react";
import Blog from "./Blog";
function BlogDetails(){
    const blogs=[
        new Blog(1,"React Basics","Bratish"),
        new Blog(2,"Java Collections","Ratul"),
        new Blog(3,"Spring Boot REST","Bratish")

    ];
    return(
        <div>
            <h2>Blog Details</h2>
            <ul>
                {blogs.map(blog=>(
                    <li key={blog.id}>
                        {blog.title}-{blog.author}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default BlogDetails;