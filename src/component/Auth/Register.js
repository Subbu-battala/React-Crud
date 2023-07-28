import React, { useState } from "react";
import Fireapp from "../../Config/firebaseConfig";
import {toast} from 'react-toastify'

function Register(props){
    const [reg,setReg] = useState({
        user: "",
        pass: ""
    })

    const readValue = (event) => {
        const {name, value } = event.target
        setReg({...reg, [name]: value})
    }

    const submitHandler = (event) => {
        event.preventDefault()
        console.log(`new register =`, reg)
    }


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-primary">Register</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form autoComplete="off" onSubmit={submitHandler}>
                                <div className="form-group mt-12">
                                    <label htmlFor="user">UserName</label>
                                    <input type="email" name="user" value={reg.user} onChange={readValue} id="user" className="form-control" required />
                                </div>
                                <div className="form-group mt-12">
                                    <label htmlFor="pass">Password</label>
                                    <input type="password" name="pass" value={reg.pass} onChange={readValue} id="pass" className="form-control" required/>
                                </div>
                                <div className="form-group mt-12">
                                    <input type="submit" value="Register" className="btn btn-danger" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Register