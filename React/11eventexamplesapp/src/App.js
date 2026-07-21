import React from "react";
import CurrencyConverter from "./CurrencyConverter";
import EventExamples from "./EventExample";

function App(){
  return(
    <div style={{margin:"20px"}}>
      <EventExamples />
      <hr/>
      <CurrencyConverter />

    </div>
  );
}
export default App;