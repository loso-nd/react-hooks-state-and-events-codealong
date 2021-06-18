import React from "react";
import Toggle from "./Toggle";

function App() {
  
  return (
    <div>
      <h1>Toggle</h1>
      <Toggle />
    </div>
  );
}

export default App;


//Food of Thought??
/**
 * ? Do we need state for this feature?
 * ? Is the data for this feature static or dynamic?
 * ? Can this feature be made using props or state?
 * 
 * ! Props where state is not needed:
 *  * if it is passed in from a parent via props then it does not need state
 *  * Can I compute it based on any other state or props in my component, then it does not need state
 *  * If it reamains unchanged over time, then it does not need state
 */