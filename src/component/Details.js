import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const URL = 'https://dummyjson.com'

function Details(props){

    const [user,setUser] = useState(false)

    const params = useParams()
    console.log('params=', params)

    const getUsers = useCallback(() => {
        const readUsers = async() => {
            await axios.get(`${URL}/users/${params.userId}`)
               .then(res => {
                 console.log('single user =', res.data)
                 setUser(res.data)
               })
               .catch(err => toast.error(err.message))
        }
        
        readUsers()

    },[])

    useEffect(() => {
        getUsers()
    },[])


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-primary">Details</h3>
                </div>
            </div>

        </div>
    )
}

export default Details