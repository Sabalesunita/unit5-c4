import { useState } from "react";

export const Login = () => {
const[form,setForm]= useState({
    username:"",
    password:"",
});

const getData = async () => {
    let data = await fetch("http://localhost:8080/orders",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(form),
    });


    data =await data.json();
    console.log(data);
};
    const handleSubmit =(e) => {
        e.preventDefault();
        getData();
    };

    const handleChange =(e) =>{
        const {name,value}=e.target;
        setForm({
            ...form,
            [name]:value,
        });
        console.log(form);
    }


    return (
      <div>
        <input 
        onChange={handleChange}
          className="username"
          type="text"
          name="username"
          placeholder="Enter Username"
        />
        <input
        onChange={handleChange}
          className="password"
          type="password"
          name="password"
          placeholder="Enter password"
        />
        {/* On this button click make network req to find user with same username and password */}
        {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
        <button className="submit" onClick={handleSubmit}>Login</button>
      </div>
    );
  };