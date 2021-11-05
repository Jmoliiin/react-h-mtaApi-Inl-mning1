import React, {useState, useEffect} from 'react'
import UserCard from './UserCard'

const GetUserApi=()=> {
    
    const[getUser, setGetUser]= useState([])

    useEffect(() => {
        fetch("https://ecexam-webapi.azurewebsites.net/api/customers")
        .then(res => res.json())
        .then(data => setGetUser(data))
    }, [])
    

    return (
        <div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
            {
                getUser.map(item =>( <UserCard key={item.id} item={item} /> )) 
            } 
        </div>
        </div>
    )
}

export default GetUserApi
