import UserContact from './Components/UserContact/UserContact.jsx';
import Header from './Components/header/header';
import React, {useState} from 'react';


function App() {
  const imgUrl = "https://randomuser.me/api/portraits/men/97.jpg";
  const name = "Jacobo Quiqui";

  const[users, setUsers]= useState([]);   
  
  const userData = [
    {
      imgUrl: "https://randomuser.me/api/portraits/men/97.jpg",
      name: "Jacobo Quiqui"
    },
    {
      imgUrl: "https://randomuser.me/api/portraits/men/97.jpg",
      name: "Jacobo Quiqui"
    },
    {
      imgUrl: "https://randomuser.me/api/portraits/men/97.jpg",
      name: "Jacobo Quiqui"
    }
  ]

  const usersList = userData.map(user => <UserContact imgUrl={user.imgUrl} name={user.name}/>)

  return (
      <div className='App'>
          <h1>Hello</h1>
          <Header/> 
         {usersList}
      </div>
  );
}

export default App;
