import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {

    const loaderUsers = useLoaderData();
    const [users, setUsers] = useState(loaderUsers);

    const handelDelate = id =>{
        fetch(`http://localhost:5000/user/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data=>{
            if(data.deletedCount >0){
                console.log('deleted successfully')

                // remove the users ui 

                const remainingUsers = users.filter(user => user._id == id);
                setUsers(remainingUsers)
            }
            
        })

    }




    return (
        <div>
            <h1>users: {loaderUsers.length}</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>CreatedAt</th>
        <th>Last logged In</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        loaderUsers.map(user=> <tr key={user._id}>
            <th>1</th>
            <td>{user.email}</td>
            <td>{user.createdAt}</td>
            <td>Blue</td>
            <td>
                <button onClick={()=> handelDelate(user._id)} className="btn">X</button>
            </td>
          </tr>)
      }
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;