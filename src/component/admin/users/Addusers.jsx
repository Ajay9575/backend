// import React, { useState } from 'react';
// import axios from 'axios';
// import {Form} from 'react-bootstrap';
// import {
//     FormControl,
//     FormLabel,
//     Input,
// } from '@chakra-ui/react';

// function Addusers() {
//     const [uid, setuid] = useState('');
//     const [user_name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [mobile, setMobile] = useState('');
//     const [aadhar, setAadhar] = useState('');
//     const [doj, setdob] = useState('');
//     const [dob, setdoj] = useState('');
//     const [qualification, setqualification] = useState('');
//     const [address, setAddress] = useState('');
//     const [state, setState] = useState('');
//     const [city, setCity] = useState('');
//     const [pincode, setpincode] = useState('');
//     const [status, setStatus] = useState('');
//     const [password, setPassword] = useState('');
//     const [photo, setPhoto] = useState('');

    
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const formData = new FormData();
//         formData.append('uid', uid);
//         formData.append('user_name', user_name);
//         formData.append('email', email);
//         formData.append('password', password);
//         formData.append('mobile', mobile);
//         formData.append('aadhar', aadhar);
//         formData.append('dob', dob);
//         formData.append('qualification', qualification);
//         formData.append('doj', doj);
//         formData.append('address', address);
//         formData.append('state', state);
//         formData.append('city', city);
//         formData.append('pincode', pincode);
//         formData.append('status', status);
//         formData.append('photo', photo);

//         try {
//             // await userSchema.validate(formData, { abortEarly: false });

//             axios.post('http://localhost:6767/api/admin/userregister', formData)
//                 .then((res) => {
//                     if (res.data === 'Success') {
//                         window.location.href = '/';
//                     }
//                 })
//                 .catch((err) => console.error(err));
//         } catch (errors) {
//             // Handle validation errors
//             console.error(errors);
//             alert('Form is Incomplete');
//         }
//     };

//     return (
//         <>
//                 <Form class='row g-6'>
//                     <div className='d-flex flex-column align-items-center pt-4 '>
//                         <h2>Add User Details</h2>
//                         <hr />
//                         <FormControl className="row g-3 w-50" onSubmit={handleSubmit}>
//                         <div className="col-6">
//                                 <FormLabel for="InputName" className="form-label" >Uid</FormLabel>
//                                 <Input type="text" className="form-control" id="InputName" placeholder='Enter your Name' autoComplete='off'
//                                     onChange={e => setuid(e.target.value)} required />
//                             </div>

//                             <div className="col-6">
//                                 <FormLabel for="InputName" className="form-label" >User Name</FormLabel>
//                                 <Input type="text" className="form-control" id="InputName" placeholder='Enter your Name' autoComplete='off'
//                                     onChange={e => setName(e.target.value)} required />
//                             </div>
//                             <div className="col-6">
//                                 <FormLabel for="InputNumber" className="form-label">DOB</FormLabel>
//                                 <Input type="date" className="form-control" id="InputNumber" placeholder='Enter your DOJ'
//                                     onChange={e => setdob(e.target.value)} required />
//                             </div>
//                             <div className="col-6">
//                                 <FormLabel for="InputName" className="form-label" >Mobile</FormLabel>
//                                 <Input type="number" className="form-control" id="InputName" placeholder='Enter Mobile Number' autoComplete='off'
//                                     onChange={e => setMobile(e.target.value)} required />
//                             </div>

//                             <div className="col-6">
//                                 <FormLabel for="InputEmail4" className="form-label">Aadhar</FormLabel>
//                                 <Input type="number" className="form-control" id="InputEmail4" placeholder='Enter Aadhar Number' autoComplete='off'
//                                     onChange={e => setAadhar(e.target.value)} required />
//                             </div>
//                             <div className="col-6">
//                                 <FormLabel for="InputEmail4" className="form-label">Email</FormLabel>
//                                 <Input type="email" className="form-control" id="InputEmail4" placeholder='Enter Your Email' autoComplete='off'
//                                     onChange={e => setEmail(e.target.value)} required />
//                             </div>
//                             <div className="col-6">
//                                 <FormLabel for="InputAddress" className="form-label">Password</FormLabel>
//                                 <Input type="password" className="form-control" id="InputAddress" placeholder="Enter Your Password" autoComplete='off'
//                                     onChange={e => setPassword(e.target.value)} required />
//                             </div>
//                             <div className="col-6">
//                                 <FormLabel for="InputAddress" className="form-label">DOJ</FormLabel>
//                                 <Input type="date" className="form-control" id="InputAddress" placeholder="Enter Your DOB" autoComplete='off'
//                                     onChange={e => setdoj(e.target.value)} required />
//                             </div>
                           
                         
//                             <div className="col-6">
//                                 <FormLabel for="InputAddress" className="form-label">Qualification</FormLabel>
//                                 <Input type="text" className="form-control" id="InputAddress" placeholder="Enter Your Qualification" autoComplete='off'
//                                     onChange={e => setqualification(e.target.value)} required />
//                             </div>
//                             <div className="col-6">
//                                 <FormLabel for="InputAddress" className="form-label">Address</FormLabel>
//                                 <Input type="text" className="form-control" id="InputAddress" placeholder="Enter Your Address" autoComplete='off'
//                                     onChange={e => setAddress(e.target.value)} required />
//                             </div>
//                             <div className="col-6">
//                                 <FormLabel for="InputAddress" className="form-label">PIN</FormLabel>
//                                 <Input type="number" className="form-control" id="InputAddress" placeholder="Enter Your PIN code" autoComplete='off'
//                                     onChange={e => setpincode(e.target.value)} required />
//                             </div>
//                             <div className="col-6">
//                                 <FormLabel for="InputAddress" className="form-label">State</FormLabel>
//                                 <Input type="text" className="form-control" id="InputAddress" placeholder="Enter Your State" autoComplete='off'
//                                     onChange={e => setState(e.target.value)} required />
//                             </div>
//                             <div className="col-6">
//                                 <FormLabel for="InputAddress" className="form-label">City</FormLabel>
//                                 <Input type="text" className="form-control" id="InputAddress" placeholder="Enter Your City" autoComplete='off'
//                                     onChange={e => setCity(e.target.value)} required />
//                             </div>
                           
//                             <div className="col-6">
//                                 <FormLabel for="InputSalary" className="form-label" >Status</FormLabel>
//                                 <Form.Select aria-label="Default select example" onChange={e => setStatus(e.target.value)}>
//                                     <option>Select...</option>
//                                     <option value="Active">Active</option>
//                                     <option value="InActive">InActive</option>
//                                 </Form.Select>
//                             </div>
//                             <div className="col-6 ">
//                                 <FormLabel className="form-label" for="InputGroupFile01">Select Your Profile</FormLabel>
//                                 <Input type="file" className="form-control" id="InputGroupFile01"
//                                     onChange={e => setPhoto(e.target.files[0])} />
//                             </div>

//                             <div className="Col-12">
//                                 <button type="submit" className='col-12  btn btn-danger' onSubmit={() => {
//                                     handleSubmit()
//                                 }} >Submit</button>

//                             </div>
//                         </FormControl>
//                     </div>
//                 </Form>
//         </>
//     );
// }

// export default Addusers;


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React,{useState} from 'react';

function Adduser() {
  const[uid, setuid] = useState("")
  const[user_name, setuser_name] = useState("")
  const[email, setemail] = useState("")
  const[password, setpassword] = useState("")
  const[mobile, setmobile] = useState("")
  const[photo, setphoto] = useState("")
  const[aadhar, setaadhar] = useState("")
  const[dob, setdob] = useState("")
  const[qualification, setqualification] = useState("")
  const[doj, setdoj] = useState("")
  const[address, setaddress] = useState("")
  const[city, setcity] = useState("")
  const[state, setstate] = useState("")
  const[pincode, setpincode] = useState("")
  // const[status, setstatus] = useState("")

  function saverole(){
    let data={uid,user_name,email,password,mobile,photo,aadhar,dob,qualification,doj,address,city,state,pincode}
    fetch('http://localhost:6767/api/admin/userregister',{
      method:'post',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      console.log("result",result);
      result.json().then((resp)=>{
       console.log("resp",resp)
      })
    })
  }
  return (
    <div style={{marginLeft:'50px'}}>
    <Form class='row g-3 w-10  '>
      <Form.Group className="mb-3 col-6 " controlId="formBasicEmail">
        <Form.Label>Uid</Form.Label>
        <Form.Control type="text"
        value ={uid}
        onChange={(e) =>{setuid(e.target.value)}}
        name='uid'  
         placeholder="enter uid " />
       </Form.Group>

      <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
        <Form.Label>User_name</Form.Label>
        <Form.Control  type="text"value ={user_name}onChange={(e) =>{setuser_name(e.target.value)}}name='user_name'placeholder="enter your name"/> </Form.Group>

      <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email"
        value ={email}
        onChange={(e) =>{setemail(e.target.value)}}
        name='email'
         placeholder="ex:abc@gmail.com" />
       </Form.Group>

      <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"
        value ={password}
        onChange={(e) =>{setpassword(e.target.value)}}
        name='password'
         placeholder="enter your password" />
       </Form.Group>

      <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text"
        value ={mobile}
        onChange={(e) =>{setmobile(e.target.value)}}
        name='mobile'
         placeholder="ex:8347763782" />
       </Form.Group>

      {/* <Form.Group className="form-control" controlId="InputGroupFile01">
        <Form.Label>photo</Form.Label>
        <Form.Control type="file"
        // value ={photo}
        onChange={(e) =>{setphoto(e.target.files[0])}}
        name='photo'
         placeholder="photo" />
       </Form.Group> */}

       <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
        <Form.Label>Dob</Form.Label>
        <Form.Control type="date"
        value ={dob}
        onChange={(e) =>{setdob(e.target.value)}}
        name='dob'
          />
       </Form.Group>


      <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
        <Form.Label>Aadhar</Form.Label>
        <Form.Control type="text"
        value ={aadhar}
        onChange={(e) =>{setaadhar(e.target.value)}}
        name='aadhar'
         placeholder="enter your aadhar no here" />
       </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>dob</Form.Label>
        <Form.Control type="date"
        value ={dob}
        onChange={(e) =>{setdob(e.target.value)}}
        name='dob'
         placeholder=" dob" />
       </Form.Group> */}

      <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
        <Form.Label>Qualification</Form.Label>
        <Form.Control type="text"
        value ={qualification}
        onChange={(e) =>{setqualification(e.target.value)}}
        name='qualification'
         placeholder=" enter your qualification" />
       </Form.Group>

      <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
        <Form.Label>Doj</Form.Label>
        <Form.Control type="date"
        value ={doj}
        onChange={(e) =>{setdoj(e.target.value)}}
        name='doj'
         />
       </Form.Group>

      <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text"
        value ={address}
        onChange={(e) =>{setaddress(e.target.value)}}
        name='address'
         placeholder="enter your address here" />
       </Form.Group>

      <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <Form.Control type="text"
        value ={city}
        onChange={(e) =>{setcity(e.target.value)}}
        name='city'
         placeholder="city" />
       </Form.Group>

      <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
        <Form.Label>State</Form.Label>
        <Form.Control type="text"
        value ={state}
        onChange={(e) =>{setstate(e.target.value)}}
        name='state'
         placeholder=" state" />
       </Form.Group>

      <Form.Group className="mb-3 col-6" controlId="formBasicPassword">
        <Form.Label>Pincode</Form.Label>
        <Form.Control type="text"
        value ={pincode}
        onChange={(e) =>{setpincode(e.target.value)}}
        name='pincode'
         placeholder="enter your pincode" />
      </Form.Group>
       
      <Form.Group className="mb-3 col-6 " controlId="InputGroupFile01">
        <Form.Label>Photo</Form.Label>
        <Form.Control type="file"
        // value ={photo}
        onChange={(e) =>{setphoto(e.target.files[0])}}
        name='photo'
         />
       </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>status</Form.Label>
        <Form.Control type="text"
        value ={status}
        onChange={(e) =>{setstatus(e.target.value)}}
        name='status'
         placeholder="status" />
      </Form.Group> */}
{/* 
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Action</Form.Label>
        <Form.Control type="password" placeholder="Action" />
      </Form.Group> */}

      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Role</Form.Label>
        <Form.Control type="password" placeholder="Role" />
      </Form.Group> */}
      <Button onClick ={saverole} variant="primary" type="submit">
        Submit
      </Button>
     
    </Form>
    </div>
  );
}

export default Adduser;