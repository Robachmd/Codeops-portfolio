import React, { useState } from 'react'

function Form() {
    const [formData,setFormData]=useState({name:'',phone:"",password:""});
    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value, [e.target.phone]: e.target.value}); 
  return (
    <div>
        <form action="submit" method="post">
        <label htmlFor="name"></label>
        <input type="text" id='name' onChange={handleChange}/>
        <label htmlFor="tele"></label>
        <input type="tel" id='tele' onChange={handleChange} />
        <label htmlFor="password"></label>
        <input type="password" id='password' onChange={handleChange} />
        <input type="button" value="" />
    
        </form>

    </div>
    
    
    
  )
}}

export default Form;