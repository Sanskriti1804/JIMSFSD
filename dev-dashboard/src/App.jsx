import Header from './components/Header'
import "./App.css"
import UserCard from './components/UserCard';
import { useEffect, useState } from 'react';
import DeveloperForm from './components/DeveloperForm'
import LoadingSpinner from "./components/LoadingSpinner"
import ErrorMessage from "./components/ErrorMessage"
import EmptyState from "./components/EmptyState"

function App(){

  // darkmode - current state value
  //setDarkmode - function to update it
  const [darkmode, setDarkMode] = useState(false)

  //users state - initially empty  because data will come from fake api
  const [users, setUsers] = useState([])

  //FAKE API DATA
  // rendering list - using map
  const apiUsers = 
    [
      { id : 1, name : "Suns", role : "Frontend Developer", online : true },
      { id : 2, name : "Max", role : "Excel Sheet Ultra Junior", online : true },
      { id : 3, name : "Shreya", role : "Singer loml", online : false},
      { id : 4, name : "Sharukh", role : "Boyfriend", online : false }
    ]

    //COMPONENT LIFECYCLE - runs ONCE after the component mounts
    useEffect(() =>{
      console.log("Dashboard Loaded")

      //stimulating api calls
      setTimeout(() => {
        try{
          setUsers(apiUsers)    //success response
        }
        catch(err){
          setError("Failed to fetch Developers")  //handle errors
        }
        finally{
          setLoading(false)   //stops loading
        }
      }, 2000)
    }, [])
  

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)  //null - no error

  
  function addDev(newUser){
    //prev users + new users 
    setUsers((prevUsers) => [
      ...prevUsers,
      newUser
    ])
  }  

  if(loading){
    return<LoadingSpinner/>
  }

  if(error){
    return <ErrorMessage message={error}/>
  }

  return(
    <div className={darkmode ? "app dark" : "app light"}>
        <Header darkmode={darkmode} setDarkMode={setDarkMode}/>
        
    <div className="user-card-container"> 

      <DeveloperForm addDev={addDev}/>
      {/* empty state */}
      {users.length == 0 ? (<EmptyState/>) : (
        <div className='card-container'>
          {/* success state - map function  */}
          {users.map((user) => (
            <UserCard
              key = {user.id}
              name= {user.name}
              role= {user.role}
              online = {user.online}
            />
          ))}  
        </div>
      )}
        </div>
    </div>
)
}

export default App;