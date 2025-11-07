import React, { useState , useEffect} from "react";
import axios from "axios";

function Calling() {
  const [loading, setLoading] = useState(false);
 const [users,setusers]=useState([])
  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    setusers(response.data)
      console.log(response.data)
    } catch (e) {
      console.error(e);
    } };
    
    useEffect(() => {
    //  getData()
    }, [])
    

  return (
    <>
       <h2>Calling</h2>
      <div>
        <button  onClick={getData}>click
        </button>
        {users.map((item,index) => (
    <div> <p>{item.name}</p>
         <p>{item.email}</p></div>         
        ))}
      </div> 
    </>
  );
}

export default Calling;
