import React from "react";
function ListofPlayers(){
        const players=[
            {name:"Virat Kohli",score: 95},
            { name: "Rohit Sharma", score: 82 },
            { name: "Shubman Gill", score: 76 },
            { name: "KL Rahul", score: 68 },
            { name: "Hardik Pandya", score: 71 },
            { name: "Ravindra Jadeja", score: 66 },
            { name: "Rishabh Pant", score: 89 },
            { name: "Surya Kumar Yadav", score: 92 },
            { name: "Mohammed Shami", score: 45 },
            { name: "Jasprit Bumrah", score: 55 },
            { name: "Kuldeep Yadav", score: 62 }
        ];
        const lowScorePlayers=players.filter(player =>player.score<70);
        return(
            <div>
                <h2>List of Players</h2>
                <h3>All players</h3>
                <table border="1" cellPadding="10">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            players.map((player,index) =>(
                                <tr key={index}>
                                    <td>{player.name}</td>
                                    <td>{player.score}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <br />
                <h3>Players with score below 70</h3>
                <ul>
                    {
                        lowScorePlayers.map((player,index)=>(
                            <li key={index}>
                                {player.name}-{player.score}
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
}
export default ListofPlayers;