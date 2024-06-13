import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

const [data,changedata]=useState(
    {
        
        "email":"",
        "password":""
    }
)

const inputHandler=(event)=>{
changedata({...data,[event.target.name]:event.target.value})
}

const readValue=()=>{
    console.log(data)
    
}

  return (
    <div>


<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<label htmlFor="" className="form-label">Email</label>
<input type="text" className="form-control" name="email" value={data.email} onChange={inputHandler}/>


    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">Password</label>
    <input type="password" name="password" id="" className="form-control"  value={data.password} onChange={inputHandler}/>

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<button className="btn btn-success" onClick={readValue}>Login</button>


    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

   



    </div>
</div>

        </div>
    </div>
</div>

    </div>
  )
}

export default Login