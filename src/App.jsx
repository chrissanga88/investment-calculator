import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevInput => {
      return {
        ...prevInput,
        // Adding a plus in front of newValue will force a conversion of the string number to a proper number value
        [inputIdentifier]: +newValue
      };
    });
  }

  return (
    <main>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!inputIsValid && <p className="center">Please enter a duration greater than 0.</p>}
      {inputIsValid && <Results input={userInput}/>}
    </main>
  )
}

export default App
