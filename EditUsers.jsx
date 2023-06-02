import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const Editusers = () => {

let[name, setName]=useState("")
let[salary, setSalary]=useState("")
let[company, setCompany]=useState("")

let {index}=useParams()
let navigate=useNavigate()
console.log(index)

    useEffect(()=>{
        axios.get(`http://localhost:3000/content/${index}`)
        .then((resp)=>{
            console.log(resp.data)
            setName(resp.data.name)
            setSalary(resp.data.salary)
            setCompany(resp.data.company)
        })
    }, [])
    let nameData=(e)=>{
        e.preventDefault()
        setName(e.target.value)
    }
    let salaryData=(e)=>{
        e.preventDefault()
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        e.preventDefault()
        setCompany(e.target.value)
    }
    let Badlav=(e)=>{
        e.preventDefault()
        console.log(name,salary,company)
        let bucket={name,salary,company}
        axios.put(`http://localhost:3000/content/${index}`,bucket)
        .then((response)=>{
           console.log("Dta has been added")
        })
        navigate("/users")
        // .catch(()=>{
        //     console.log("Dta has not been added")
        // })
           
      
    }
  return (
    <div id={style.myForm}>
    <table>
        <tr>
            <th colSpan={2}><h3>Update User Details</h3></th>
        </tr>
        <tr>
            <td><label htmlFor="">Name</label></td>
            <td>:<input type="text" value={name} onChange={nameData} /></td>
        </tr>
        <tr>
            <td><label htmlFor="">Salary</label></td>
            <td><input type="text"  value={salary}  onChange={salaryData}/></td>
        </tr>
        <tr>
            <td><label htmlFor="">Company</label></td>
            <td><input type="text"  value={company} onChange={companyData}/></td>
        </tr>
        <tr>
            <th colSpan="2"><button onClick={Badlav}>Update</button></th>
        </tr>
        </table>                                                                                                                                                                                                                                                                                                          
        </div> 
     )
    }
  export default Editusers

