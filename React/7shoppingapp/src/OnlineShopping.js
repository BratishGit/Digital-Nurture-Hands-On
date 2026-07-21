import React from "react";
import Cart from "./Cart";
class OnlineShopping extends React.Component{
    constructor(props){
        super(props);
        this.items=[
            new Cart("Laptop",65000),
            new Cart("Mobile",25000),
            new Cart("TV",50000),
            new Cart("Washing Machine",70000),
            new Cart("Heater",10000)

        ];
    }
    render(){
        return(
            <div>
                <h1>Shopping Cart</h1>
                <table border="1" cellPadding ="10">
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.items.map((item,index)=>(
                            <tr key ={index}>
                                <td>{item.itemName}</td>
                                <td>₹{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default OnlineShopping;