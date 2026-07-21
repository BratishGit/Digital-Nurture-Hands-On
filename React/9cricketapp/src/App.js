import React from "react";
import IndianPlayers from "./Indianplayers";
import ListofPlayers from "./ListofPlayers";
function App(){
  const flag =true;
  if(flag){
    return(
      <div>
        <ListofPlayers />
      </div>
    );
  }
  else{
    return(
      <div>
        <IndianPlayers />
      </div>
    );
  }
}
export default App;