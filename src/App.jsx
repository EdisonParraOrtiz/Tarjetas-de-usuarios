import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [user, setUser] = useState()
  
  useEffect(()=>{
    const URL ='https://randomuser.me/api/'
    axios.get(URL)
     .then(res=> setUser(res.data.results[0]))
     .catch(err=> console.log(err.message))
  })

  console.log(user);

  return (
    <div className="App">
      <img src={user?.picture.large} alt="" />
      <ul>
        <li><span className='bold'> Name: </span> {user?.name.title} {user?.name.first}{user?.name.last} </li>
        <li><span className='bold'> Email:</span> {user?.email}</li>
        <li><span className='bold'> Location: </span> {`${user?.location.city} ${user?.location.country}`} </li>
        <li><span className='bold'> Gender: </span> {user?.gender} </li>
      </ul>
    </div>
  )
}

export default App
