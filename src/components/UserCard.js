import React from 'react'

function UserCard({item}) {
    return (
        <div className="col">
            <div className="card shadow h-100" >
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" className="card-img-top" alt=""/>
                <div className="card-body">
                    <h6 className="card-title">{item.id}. {item.firstName} {item.lastName} </h6>
                    <p className="card-text"> {item.email}</p>
                </div>
            </div>
        </div>
    )
}

export default UserCard
