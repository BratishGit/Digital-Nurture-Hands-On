import React from "react";
function IndianPlayers(){
    const team=[
        "Virat",
        "Hardik",
        "Rohit",
        "Gill",
        "Rahul",
        "Pant"
    ];
    const[odd1,even1,odd2,even2,odd3,even3]=team;
    const T20Players =[
        "Virat",
        "Rohit",
        "Surya"
    ];
    const RanjiPlayers =[
        "Pujara",
        "Rahane",
        "Iyer"
    ];
    const mergedPlayers =[...T20Players,...RanjiPlayers];
    return(
        <div>
            <h2>Odd team Players</h2>
            <ul>
                <li>{odd1}</li>
                <li>{odd2}</li>
                <li>{odd3}</li>
            </ul>
            

            <h2>Even team Players</h2>
            <ul>
            <li>{even1}</li>
            <li>{even2}</li>
            <li>{even3}</li>
            </ul>

            <h2>Merged Players</h2>
            <ul> 
                {
                    mergedPlayers.map((player,index)=>(
                        <li key ={index}>{player}</li>
                    )
                    
                    )
                }
            </ul>

        </div>
    );
}
export default IndianPlayers;