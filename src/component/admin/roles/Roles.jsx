import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Category() {
    const [data, setData] = useState([])
    const [role_id, setRoleId] = useState('')
    const [role_name, setRoleName] = useState('')
    const handelSave = () => {
        axios.post('http://localhost:6767/role/api/admin/roles/add', { role_id, role_name })
            .then(result => {
                if (result.data.status === "Successfully enter") {
                    alert("role Added Successfully")
                }
                else{
                  alert(result.data.status)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        axios.get('http://localhost:6767/role/api/admin/roles/view')
            .then(result => {
                setData(result.data)
                // console.log(result.data)
               
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <>
        <div className="container d-flex justify-content-center" style={{marginTop:'35px',marginLeft:'30px'}}>
            <div class="card mx-5 mt-5" style={{ width: '20rem' }}>
                <h3 className='text-center mt-2'>Add Roles</h3>
                <div class="card-body justify-content-center">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Role ID</label>
                        <input type="email" class="form-control" onChange={(e) => setRoleId(e.target.value)} id="exampleFormControlInput1" placeholder="Enter Role Id" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Role Name</label>
                        <input type="email" class="form-control" onChange={(e) => setRoleName(e.target.value)} id="exampleFormControlInput1" placeholder="Enter Role Name" />
                    </div>
                    <button type="button" onClick={handelSave} class="btn col-12 btn-outline-primary">Save</button>
                </div>
            </div>

            <div className='mx-5 mt-5 border'>
                <h3 className='mt-2 text-center'>All Roles List</h3>
                <table class="table table-hover border m-3 " style={{ width: '20rem' }}>
                    <thead >
                        <tr className=' table-light bg-blackbg-gradient'>
                            
                           
                            <th scope="col">Role Id</th>
                            <th scope="col">Role Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => {
                                return (<><tr key={index}>

                                    {/* <th >{index+1}</th> */}
                                    <td>{item.role_id}</td>
                                    <td>{item.role_name}</td>
                                    <td><button>Update</button></td>
                                </tr>
                                </>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
            </div>
        </>
    )
}

export default Category
