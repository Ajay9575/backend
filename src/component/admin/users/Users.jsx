import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Button, Table, Col, Row, Form, DropdownButton, Modal } from 'react-bootstrap';
import { Input } from '@chakra-ui/react'
import {EditIcon,ViewIcon} from '@chakra-ui/icons'
import { useNavigate, useParams } from 'react-router-dom';
import Role_assign from '../users/Role_assign';
import { Switch } from "@mui/material";
// import { MDBSwitch } from 'mdb-react-ui-kit';

function User() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.post('http://localhost:6767/api/userlist')
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    setData(res.data);

                } else {
                    alert("Error")
                }
            })
            .catch(err => console.log(err));
    }, []);
    // updateuser
    const {uid} = useParams()
    const [user_name, setName] = useState()
    const [email, setEmail] = useState()
    const [mobile, setmobile] = useState()
    const [aadhar, setAadhar] = useState()
    const [doj, setdoj] = useState()
    const [dob, setdob] = useState()
    const [qualification, setqualification] = useState()
    const [address, setAddress] = useState()
    const [state, setState] = useState()
    const [city, setCity] = useState()
    const [pincode, setpincode] = useState()
    const [status, setStatus] = useState()
    const [password, setPassword] = useState()
    const [photo, setPhoto] = useState()



    const navigate = useNavigate()

    const handleUpdate = () => {
        const formData = new FormData()
        formData.append('uid', uid)
        formData.append('user_name', user_name)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('mobile', mobile)
        // formData.append('aadhar', aadhar)
        // formData.append('doj', doj)
        formData.append('qualification', qualification)
        // formData.append('dob', dob)
        formData.append('address', address)
        // formData.append('state', state)
        formData.append('city', city)
        formData.append('pincode', pincode)
        formData.append('status', status)
        formData.append('photo', photo)
        axios.put('http://localhost:6767/api/admin/userupdate/' + user_name, formData)
            .then(res => {
                if (res.data === "Success") {
                    // window.location.href("/");

                    navigate("/")
                }
            })
            .catch(err => console.log("err"));
    }
    // updateuser
    const [show2, setShow2] = useState(false);    // Modal for View
    const [show3, setShow3] = useState(false);    // Modal for Update

    const handleClose2 = () => setShow2(false);   // Modal for View
    const handleShow2 = () => setShow2(true);

    const handleClose3 = () => setShow3(false);   // Modal for Update
    const handleShow3 = () => setShow3(true);

    async function activestatus(uid) {
        let response = await axios.patch(`http://localhost:6767/active?uid=${uid}`);
        console.log(response)
        // getData()
      }
    
      async function deactivestatus(uid) {
        let response = await axios.patch(`http://localhost:6767/deactive?uid=${uid}`);
        console.log(response)
        // getData()
    
      }


    return (
        <div>
            <h2 className='d-flex justify-content-center'>List of All Users</h2>
            <Form inline>
                <Row>
                    <Col>
                        <Link to='/adduser'><Button className='btn-success'>+ ADD USER</Button></Link>
                        <div>
                        <Input type="text"placeholder="Search"style={{ marginLeft: '70%' }}/>
                        <Button className="btn btn-success">
                            Search
                        </Button>
                        </div>
                    </Col>
                </Row>
            </Form>
            <br />
            <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        {/* <th>Dob</th> */}
                        {/* <th>Doj</th> */}
                        <th>Photo</th>
                        {/* <th>Adhar Card</th> */}
                        <th>Qualification</th>
                        {/* <th>State</th> */}
                        <th>City</th>
                        {/* <th>Pincode</th> */}
                        <th>Address</th>
                        <th>Role_Assign</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => {
                        return <tr key={index}>
                            {/* <td>{index + 1}</td> */}
                            <td>{user.uid}</td>
                            <td>{user.user_name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            {/* <td>{user.dob}</td> */}
                            {/* <td>{user.doj}</td> */}
                            <td><img src={user.photo} alt={user.name} style={{height:50, width:50, borderRadius:'100%'}}/></td>
                            {/* <td>{user.aadhar}</td> */}
                            <td>{user.qualification}</td>
                            {/* <td>{user.Role_Assgin}</td> */}
                            <td>{user.city}</td>
                            <td>{user.address}</td>
                             <td><Role_assign uid ={user.uid} user_name={user.user_name}/></td>
                            
                    {/* <Form>
                      <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                        // label="Check this switch"
                      />
                    </Form> */}
                    <td>
                  
                    {user.status === "deactive" ? (
                      <Switch
                        style={{ color: "grey" }}
                        onChange={(e) => activestatus(user.uid, e)}

                      />
                    ) : (
                      <Switch
                        defaultChecked
                        onChange={(e) => deactivestatus(user.uid, e)}
                      />
                    )}
                  </td>
                  
                            <td>{user.action}
                                {/* <DropdownButton id="dropdown-basic-button" title="&#8942;" variant='Secondary'> */}
                                    <Link onClick={handleShow3} style={{color: 'black', marginLeft: '15px', textDecorationLine: 'none'}}> <EditIcon style={{ color: 'blue' }}/></Link>
                                    <Modal show={show3} onHide={handleClose3}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Update the Data</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body onClick={handleUpdate}>
                                            <form className="row g-2 w-60">
                                                <div className="col-6">
                                                    <label for="inputName" className="form-label">User_name</label>
                                                    <input type="text" className="form-control" id="inputName" placeholder='Enter Name' autoComplete='off'
                                                        onChange={e => setName(e.target.value)} />
                                                </div>
                                                 <div className="col-6">
                                                    <label for="inputEmail4" className="form-label">Mobile Number</label>
                                                    <input type="number" className="form-control" id="inputEmail4" placeholder='Enter Your Mobile Number' autoComplete='off'
                                                        onChange={e => setmobile(e.target.value)} />
                                                </div>
                                                <div className="col-6">
                                                    <label for="inputName" className="form-label">Email</label>
                                                    <input type="email" className="form-control" id="inputName" placeholder='Enter Your Email' autoComplete='off'
                                                        onChange={e => setEmail(e.target.value)} />
                                                </div>
                                               
                                                <div className="col-6">
                                                    <label for="inputNumber" className="form-label">Password</label>
                                                    <input type="number" className="form-control" id="inputNumber" placeholder='Enter password' autoComplete='off'
                                                        onChange={e => setPassword(e.target.value)} />
                                                </div>
                                                  {/* <div className="col-12">
                                                    <label for="inputDate" className="form-label">Date of Birth</label>
                                                    <input type="date" className="form-control" id="inputNumber" placeholder='Enter date of birth'
                                                        onChange={e => setdob(e.target.value)} />
                                                </div> */}
                                                {/* <div className="col-12">
                                                    <label for="inputNumber" className="form-label">Aadhar Number</label>
                                                    <input type="number" className="form-control" id="inputNumber" placeholder='Enter Your Aadhar Number'
                                                        onChange={e => setAadhar(e.target.value)} />
                                                </div> */}
                                
                                                {/* <div className="col-12">
                                                    <label for="inputName" className="form-label">Qualification</label>
                                                    <input type="text" className="form-control" id="inputName" placeholder='Enter Your Qualification'
                                                        onChange={e => setqualification(e.target.value)} />
                                                </div> */}

                                                {/* <div className="col-12">
                                                    <label for="inputName" className="form-label">Address</label>
                                                    <input type="text" className="form-control" id="inputName" placeholder='Enter Your Address'
                                                        onChange={e => setAddress(e.target.value)} />
                                                </div> */}
                                                {/* <div className="col-12">
                                                    <label for="inputName" className="form-label">State</label>
                                                    <input type="text" className="form-control" id="inputName" placeholder='Enter State Name' autoComplete='off'
                                                        onChange={e => setState(e.target.value)} />
                                                </div> */}
                                                <div className="col-6">
                                                    <label for="inputName" className="form-label">City</label>
                                                    <input type="text" className="form-control" id="inputName" placeholder='Enter City Name' autoComplete='off'
                                                        onChange={e => setCity(e.target.value)} />
                                                </div>
                                                {/* <div className="col-6">
                                                    <label for="inputNumber" className="form-label">PIN</label>
                                                    <input type="number" className="form-control" id="inputnumber" placeholder='Enter Pin number' autoComplete='off'
                                                        onChange={e => setpincode(e.target.value)} />
                                                </div> */}
                                             {/* <div className="col-12">
                                                    <label for="inputDate" className="form-label">Date of Joining</label>
                                                    <input type="date" className="form-control" id="inputNumber" placeholder='Enter date of joining'
                                                        onChange={e => setdoj(e.target.value)} />
                                                </div> */}
                                                {/* <div className="col-12">
                                                    <label for="inputSalary" className="form-label">Status</label>
                                                    <Form.Select aria-label="Default select example" onChange={e => setStatus(e.target.value)}>
                                                        <option>Select Your Status</option> */}
                                                        {/* <option>Select...</option> */}
                                                         {/* <option value="Active">Active</option>
                                                         <option value="InActive">InActive</option> */}
                                                        {/* <MDBSwitch defaultChecked id='flexSwitchCheckChecked' label='Inactive' />
                                                        <MDBSwitch defaultChecked id='flexSwitchCheckChecked' label='Active' /> */}
                                                    {/* </Form.Select>
                                                </div> */}
                                                <div class="col-6">
                                                    <label class="form-label" for="inputGroupFile01">Select Image</label>
                                                    <input type="file" class="form-control" id="inputGroupFile01"
                                                        onChange={e => setPhoto(e.target.files[0])} />
                                                </div>
                                            </form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                                <Button variant="danger" onSubmit={handleUpdate}>  Update</Button>
                                        </Modal.Footer>
                                    </Modal>
                                    <br />
                                    <Link onClick={handleShow2} style={{  color: 'black', marginLeft: '15px', textDecorationLine: 'none' }} > <ViewIcon style={{ color: 'green' }} /> </Link>
                                    <Modal show={show2} onHide={handleClose2}>
                                        <Modal.Header>
                                            <Modal.Title className='m-auto'>USER DETAILS</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body className="text-center">
                                        <img src={user.photo} alt={user.name} style={{height:50, width:50, borderRadius:'100%'}}/><br/>
                                            {/* User_uid: {user.user_uid} <br /> */}
                                            User_name: {user.user_name} <br />
                                            User_email: {user.email} <br />
                                            mobile_Number : {user.mobile} <br />
                                            Aadhar : {user.aadhar} <br />
                                            doj : {user.doj} <br />
                                            dob : {user.dob} <br />
                                            qualification : {user.qualification} <br />
                                            Address : {user.address} <br />
                                            State : {user.state} <br />
                                            City : {user.city} <br />
                                            pincode : {user.pincode} <br />
                                            Status : {user.status}  <br />
                                            
                                        </Modal.Body>
                                        <Button variant="danger" size="sm" onClick={handleClose2}>Close</Button>
                                    </Modal>
                                {/* </DropdownButton> */}
                            </td>
                            
                        </tr>
                    })}
                </tbody>
            </Table >
            </div>
        </div >
    )
}
export default User;

