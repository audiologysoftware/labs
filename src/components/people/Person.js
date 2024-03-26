
import React from 'react'
import "./Person.css"


export default function Person({ path, name, designation, address, email }) {
    return (
        <div className='faculty'>
            <div><img src={path} alt={name}  /></div>
            <div >
                <label>
                    <h4> Name: {name}</h4>
                </label>
                <label>
                    <h4> Designation:{designation}</h4>
                </label>
                <label>
                    <h4> Address: {address}</h4>
                </label>

                <label>
                    <h4> Email: {email}</h4>
                </label>

            </div>
        </div>
    )
}




