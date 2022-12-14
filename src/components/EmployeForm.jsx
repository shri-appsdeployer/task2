import { useState } from 'react'
import React from 'react'
import './EmployeForm.css'


const EmployeForm = ({data,setData}) => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [username, setUsername] = useState('')
    const handleSubmit=()=>{
       setData([...data,{Fname:fname,Lname:lname,handle:username}])
       setFname('')
       setLname('')
       setUsername('')
    }


  return (
    <>
    {/* <!-- Button trigger modal --> */}
    <button type="button" class="btn btn-primary btn-center" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Add Employee Details
    </button>
    {/*<!-- Button trigger modal -->  */}

 {/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Employe Details</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="input-group">
            <input type="text" class="form-control" placeholder='Enter First Name' value={fname} onChange={(e)=>{setFname(e.target.value)}}/>
        </div>
        <br />
        <div class="input-group">
            <input type="text" class="form-control" placeholder='Enter Last Name' value={lname} onChange={(e)=>{setLname(e.target.value)}}/>
        </div>
        <br />
        <div class="input-group">
            <input type="text" class="form-control" placeholder='Enter username' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" id='addBtn' data-bs-dismiss='modal' onClick={handleSubmit}>Add</button>
      </div>
    </div>
  </div>
</div>
{/* <!-- Modal --> */}
    </>
  )
}

export default EmployeForm;