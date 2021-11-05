import React from 'react'

function UserCard({item}) {
    return (
        <div className="col">
            <div class="card shadow h-100" >
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" class="card-img-top" alt=""/>
                <div class="card-body">
                    <h6 class="card-title">{item.id}. {item.firstName} {item.lastName} </h6>
                    <p class="card-text"> {item.email}</p>
                </div>
            </div>
        </div>
    )
}

export default UserCard
