import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { EditIcon } from '@chakra-ui/icons'
import { Input } from '@chakra-ui/react'

export default function AddOffer() {
    const [st, setSt] = useState('Status Is InActive')
    const [cl, setCl] = useState('')
    const [data, setData] = useState([])
    const [search,setSearch] = useState('')
    const [values, setValues] = useState({
        offer_id: '',
        offer_name: '',
        percentage_discount: '',
        flat_discount: '',
        upto_discount: '',
        validfrom: '',
        validto: '',
        terms_and_condition: '',
        status: 'InActive'

    })

    console.log(values.status)
    const switchClick = () => {
        if (values.status === 'InActive') {
            setValues({ ...values, status: "Active" })
            setSt("Status Is Now Active")
            setCl('success')
        } else {
            setValues({ ...values, status: "InActive" })
            setSt("Status Is InActive")
        }
    }
    const handelSave = () => {
        axios.post('http://localhost:6767/offers/api/admin/offers/add', values)
            .then(result => {
                // console.log(result);
                if (result.data.affectedRows === 1) {
                    alert("Data Added Successfully")
                }
                else {
                    alert(result)
                }
            })
            .catch(err => {
                console.error(err)
            })
    }

    useEffect(() => {
        axios.post('http://localhost:6767/offers/api/admin/offers/view')
            .then(result => {
                setData(result.data)
            })
            .catch(err => {
                alert(err)
            })
    }, [])
    const handelUpdate = (offer_id) => {
        axios.patch('http://localhost:6767/offers/api/admin/offers/updateoffers' + offer_id, values)
            .then(result => {
                if (result.data.affectedRows === 1) {
                    alert("Data Added Successfully")
                }
                else {
                    alert(result)
                }
            })
            .catch(err => {
                console.error(err)
            })
    }
    const handleSearch = () => {
        axios
          .get(`http://localhost:4000/getSearch/${search}`)
          .then((response) => {
            if (response.status === 200) {
              console.log(response.data);
            } else {
              console.log("not search")
            }
          });
    
        console.log(search);
      };
    return (
        <>

            <div className='d-flex'>
                <div class="card mx-5 mt-5" style={{ width: '30rem' }}>
                    <h3 className='text-center mt-2'>Add Categories</h3>
                    <div class="card-body justify-content-center">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Offer ID</label>
                            <input type="text" class="form-control" onChange={(e) => setValues({ ...values, offer_id: e.target.value })} id="exampleFormControlInput1" placeholder="Enter Offer Id" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Offer Name</label>
                            <input type="text" class="form-control" onChange={(e) => setValues({ ...values, offer_name: e.target.value })} id="exampleFormControlInput1" placeholder="Enter Offer Name" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Percentage Discount</label>
                            <input type="text" class="form-control" onChange={(e) => setValues({ ...values, percentage_discount: e.target.value })} id="exampleFormControlInput1" placeholder="Enter Discount In %" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Flat Discount</label>
                            <input type="text" class="form-control" onChange={(e) => setValues({ ...values, flat_discount: e.target.value })} id="exampleFormControlInput1" placeholder="Enter Flat Discount e.g 500$" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Upto Discount</label>
                            <input type="text" class="form-control" onChange={(e) => setValues({ ...values, upto_discount: e.target.value })} id="exampleFormControlInput1" placeholder="Enter Upto Discount " />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Valid From</label>
                            <input type="date" class="form-control" onChange={(e) => setValues({ ...values, validfrom: e.target.value })} id="exampleFormControlInput1" placeholder="Enter Valid from" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Valid To</label>
                            <input type="date" class="form-control" onChange={(e) => setValues({ ...values, validto: e.target.value })} id="exampleFormControlInput1" placeholder="Enter valid to" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Terms & Conditions</label>
                            <input type="text" class="form-control" onChange={(e) => setValues({ ...values, terms_and_condition: e.target.value })} id="exampleFormControlInput1" placeholder="Enter Terms & Conditions" />
                        </div>
                        <div class="form-check form-switch">
                            <label class="form-check-label" for="flexSwitchCheckDefault">Status<p className=''>*{st}</p></label>
                            <input class="form-check-input" onClick={switchClick} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        </div>
                        <button type="button" onClick={handelSave} class="btn col-12 btn-outline-danger">Save</button>
                    </div>
                </div>
                <div>
                    <h3 className='mt-2 text-center'>All Category List</h3>
                    <hr />
                    <Input
                            type="text"
                            placeholder="Search"
                            style={{ marginLeft: '60%' }}
                        />
                        <button className="btn btn-outline-danger">
                            Search
                        </button>
                    <table class="table table-hover border m-3 " style={{ width: '24vw' }}>
                        <thead >
                            <tr className=' table-light bg-blackbg-gradient'>

                                <th scope="col">sr no.</th>
                                <th scope="col">Offer Id</th>
                                <th scope="col">Offer Name</th>
                                <th scope="col">Discoint In %</th>
                                <th scope="col">Flat Discount</th>
                                <th scope="col">Upto Discount</th>
                                <th scope="col">Valid From</th>
                                <th scope="col">Valid To</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item, index) => {
                                    return (
                                        <>
                                            <tr key={index}>
                                                <th >{index + 1}</th>
                                                <td>{item.offer_id}</td>
                                                <td>{item.offer_name}</td>
                                                <td>{item.percentage_discount}</td>
                                                <td>{item.flat_discount}</td>
                                                <td>{item.upto_discount}</td>
                                                <td>{item.validfrom}</td>
                                                <td>{item.validto}</td>
                                                <td>{item.status}</td>
                                                <Link to={`/offers/update/${item.offer_id}`} style={{ backgroundColor: 'white', color: 'black',textDecorationLine: 'none' }}><EditIcon style={{ color: 'blue' }} /> Update</Link>
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
