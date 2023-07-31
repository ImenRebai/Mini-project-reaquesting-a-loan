import { useState } from "react"

function FormComp() {
  const [formInputs, setFormInputs]=useState({name: "" ,
  phoneNum: "",
   age:"",
  isEmployee: false,
  salary:"" });
  function handleCheckBoxChanged (event) {
   setFormInputs({...formInputs, isEmployee: event.target.checked})
  }
  
  return (
    <div style={{width: "900px",
     height: "500px", 
     backgroundColor: "#2c4185", 
     borderRadius: "25px",
     paddingTop: "10px",
     }}>
    <h2 style={{color: "white"}}> Requesting a Loan </h2> 
    <hr style={{color: "white", margin: "20px"}}/> 

    <form onSubmit={(event)=> {event. preventDefault()}}>

        <label style={{color: "white"}}>Name:</label>
         <br/>
        <input value={formInputs.name} onChange={(event)=>{setFormInputs({...formInputs, name: event.target.value})}} 
        style={{width:"850px" ,height: "20px"}} /> 
         <br/>
        <label style={{color: "white"}}>Phone Number:</label> 
         <br/>
        <input value={formInputs.phoneNum} onChange={(event)=>{setFormInputs({...formInputs, phoneNum: event.target.value})}}
        style={{width:"850px" ,height: "20px"}} />
         <br/>
        <label style={{color: "white"}}>Age:</label> 
         <br/>
        <input value={formInputs.age} onChange={(event)=>{setFormInputs({...formInputs, age: event.target.value})}} 
         style={{width:"850px" ,height: "20px"}}  />
         <br/>
        <label style={{color: "white"}}> Are you an employee?</label>
         <br/>
        <input type="checkbox" checked={formInputs.isEmployee} onChange={handleCheckBoxChanged}
         style={{ width: "60px"}}/>
         <br/>
        <label style={{color: "white", marginTop:"20px"}}> Salary:</label>
        <br/>
        <input  value={formInputs.salary} onChange={(event)=>{setFormInputs({...formInputs, salary: event.target.value})}}
         style={{width:"850px" ,height: "20px"}} />
        <br/>
        <button 
         style={{backgroundColor: "#ec3b83",
         color:"white" ,borderRadius: "7px" ,
          marginTop: "70px", padding: "10px 10px 10px 10px"}}>
          Submit</button>
    </form>
    </div>
  )
}

export default FormComp
