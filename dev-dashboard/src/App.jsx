import Header from './components/Header'
import "./App.css"
import UserCard from './components/UserCard';
import { useState } from 'react';

function App(){

  // darkmode - current state value
  //setDarkmode - function to update it
  const [darkmode, setDarkMode] = useState(false)


  // rendering list
  const users = [
      { id : 1, name : "Suns", role : "Frontend Developer", online : true },
      { id : 2, name : "Max", role : "Excel Sheet Ultra Junior", online : true },
      { id : 3, name : "Shreya", role : "Singer loml", online : false},
      { id : 4, name : "Sharukh", role : "Boyfriend", online : false }
    ]

  return(
    <div className={darkmode ? "app dark" : "app light"}>
        <Header darkmode={darkmode} setDarkMode={setDarkMode}/>
    <div className="user-card-container"> 

       {/*map function  */}
      {users.map((user) => (
         
      <UserCard
      key = {user.id}
      name= {user.name}
      role= {user.role}
      online = {user.online}
      />
      ))}

        </div>
    </div>
    
)
}

export default App;