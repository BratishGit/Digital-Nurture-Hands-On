import React from "react";
import Book from "./Book";
function BookDetails(){
    const books=[
        new Book(1,"Java","James Gosling",650),
        new Book(2,"React","Jordan Walke",700),
        new Book(3,"Spring Boot","Craig Walls",800)
    ];
    return (
        <div>
            <h2>Book Details</h2>
            <table border="1" cellPadding= "10">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Price</th>
                    </tr>                    
                </thead>
                <tbody>
                    {books.map(book =>(
                        <tr key={book.id}>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td>{book.price}</td>

                        </tr>
                    ))}
                </tbody>

            </table>
        </div>

    );
}
export default BookDetails;