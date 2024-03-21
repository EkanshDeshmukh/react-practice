import React, { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Useref from "./components/Useref";
import Usestate from "./components/Usestate";
import Hooooks from "./components/Hooooks";

function App() {
  const data = [
    {
      image: "https://images.unsplash.com/photo-1621347311611-5754c01d1fd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGFlc3RoZXRpYyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
      name: "John Doe",
      profession: "Engineer",
      added: false
    },
    {
      image: "https://images.unsplash.com/photo-1504834636679-cd3acd047c06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGFlc3RoZXRpYyUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
      name: "Jane Smith",
      profession: "Doctor",
      added: false
    },
    {
      image: "https://images.unsplash.com/photo-1635359401383-22d29add4a02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFlc3RoZXRpYyUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
      name: "Alice Johnson",
      profession: "Teacher",
      added: false
    },
    {
      image: "https://images.unsplash.com/photo-1676491167770-bce474fe0024?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFlc3RoZXRpYyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Bob Anderson",
      profession: "Artist",
      added: false
    }
  ];

  const [realData, setRealData] = useState(data);
  const handleClick = (index) => {
    setRealData((prev) => {
        return prev.map((item, itemindex) => {
            if (index === itemindex) {
                return { ...item, added: !item.added };  
            }
            return item;
        });
    });
};

  return (
    <>
      {/* <div className="w-full h-screen bg-zinc-300">
      <Navbar values={realData} />
        <div className="flex gap-10 justify-center mt-32 items-center">
               {realData.map((obj,index)=>(
               <Card
                 values={obj}
                  key={index} 
                  index={index}
                  handleClick={handleClick}
                  />
               ))}
        </div>
      </div> */}
      <Hooooks/>
      
    </>
  );
}

export default App;