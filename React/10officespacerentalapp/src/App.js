import React from "react";
function App(){
  const offices=[
    {
      name:"Tech Park office",
      rent:55000,
      address:"Bangalore",
      image:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600"
    },
    {
      name: "Business Hub",
      rent: 75000,
      address: "Hyderabad",
      image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600"
    },
    {
      name: "Corporate Tower",
      rent: 65000,
      address: "Mumbai",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600"
    }
  ];
  return(
    <div style={{margin: "20px"}}>
      <h1>Office Space Rental App</h1>
      {offices.map((office,index)=>(
        <div
        key={index}
        style={{
          border:"1px solid gray",
          padding:"15px",
          marginBottom: "20px",
          width: "400px"
        }}
        >
          <img 
           src={office.image}
           alt={office.name}
           width="350"
           height="220"
           />    
           <h2>{office.name}</h2>
           <h3
           style={{
            color:office.rent<60000 ?"red": "green"
           }}>
           Rent: ₹{office.rent}
           </h3> 
           <h4>Address:{office.address}</h4>
           </div>
          ))}
    </div>
  );
}
export default App;