import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Category() {
    const [data, setData] = useState([])
    const [prod_category_id, setcatId] = useState('')
    const [prod_category_name, setcatName] = useState('')
    const handelSave = async () => {
       await axios.post('http://localhost:6767/category/api/admin/category/add', {  prod_category_id , prod_category_name })
            .then(result => {
                if (result.data.status === "Successfully enter") {
                    alert("Category Added Successfully")
                    window.location.reload();
                }
            })
            .catch(err => {
                console.log("error in posting category",err)
            })
    }
    useEffect(() => {
        axios.post('http://localhost:6767/category/api/admin/category/view')
            .then(result => {
                setData(result.data)               
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <>
        <div className="container d-flex justify-content-center" style={{marginLeft:'35px',marginTop:'30px'}}>
            <div class="card mx-5 mt-5" style={{ width: '20rem' }}>
                <h3 className='text-center mt-2'>Add Categories</h3>
                <div class="card-body justify-content-center">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Category ID</label>
                        <input type="text" class="form-control" onChange={(e) => setcatId(e.target.value)} id="exampleFormControlInput1" placeholder="Enter Catgory Id" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Category Name</label>
                        <input type="text" class="form-control" onChange={(e) => setcatName(e.target.value)} id="exampleFormControlInput1" placeholder="Enter Catgory Name" />
                    </div>
                    <button type="button" onClick={handelSave} class="btn col-12 btn-outline-primary">Save</button>
                </div>
            </div>

            <div className='mx-5 mt-5 border'>
                <h3 className='mt-2 text-center'>All Category List</h3>
                <table class="table table-hover border m-3 " style={{ width: '20rem' }}>
                    <thead >
                        <tr className=' table-light bg-blackbg-gradient'>
                            
                            <th scope="col">Category Id</th>
                            <th scope="col">Category Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => {
                                return (<><tr key={index}>
                                    {/* <th>{index+1}</th> */}
                                    <td>{item.prod_category_id}</td>
                                    <td>{item.prod_category_name}</td>
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