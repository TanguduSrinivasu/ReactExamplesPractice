import {useState}  from 'react';
import './App.css';
import AddUser from './Components/users/AddUser';
import UsersList from './Components/users/UsersList';

function App() {

    const [userList,setUserList]= useState([])

 const addUserHandler =(uName, uAge) => {

    setUserList((previousUsers) => {
      return [...previousUsers, {username : uName, age : uAge, id : Math.random()}]
    })

//console.log(uName,uAge);

 }


  return (
    <>
        <AddUser onAddUser={addUserHandler}></AddUser>
        <UsersList users={userList}></UsersList>
    </>
  );
}

export default App;
