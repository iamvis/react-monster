import React from 'react'

const UserList = () => {
    const users =[
        {id: 1, name:"ram", age:22},
        {id: 2, name:"lokesh", age:12},
        {id: 3, name:"sohan", age:52},
        {id: 4, name:"rahul", age:99},
    ]
  return (
    <div>
        {
            users.map(({id, name, age})=>(
                <li key={id}>
                <h1>Name : {name}</h1>
                <h1>Age: {age}</h1>
            </li>
            ))
        }
      
    </div>
  )
}

export default UserList
