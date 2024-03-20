import React, { useState } from "react";
import Card from "./components/Card";

function App() {
  const data = [
    {
      name: "Laura Pearson",
      Profession: "Event manager",
      Image: "",
    },
    {
      name: "Renny Ray",
      Profession: "President",
      Image: "",
    },
    { name: "Kate Blanche", Profession: "Consultant", Image: "" },
  ];
  const [realData, setRealData] = useState(data);
   return (
    <>
    <Card/>
    </>
   )

  
}

export default App;
