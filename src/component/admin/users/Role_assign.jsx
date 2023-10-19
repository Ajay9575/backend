// // import Button from 'react-bootstrap/Button';
// // import Form from 'react-bootstrap/Form';
// // import React, { useEffect, useState } from "react";

// // function Roleassign(props) {
// //   const handleClose = () => setShow(false);
// //   const handleShow = () => setShow(true);
// //   const [show, setShow] = useState();
// //     return (
// //     <>
// //         <Button variant="secondary" onClick={handleShow}   >
                  
// //                   Roleassign
// //                 </Button>
      
// //       <Form>
// //         <Form.Group className="mb-3" controlId="formBasicEmail">
// //           <Form.Label>Userid</Form.Label>
// //           <Form.Control type="id" placeholder="id"  value={props.userId} />
// //           {/* <Form.Text className="text-muted">
// //             We'll never share your email with anyone else.
// //           </Form.Text> */}
// //         </Form.Group>
  
// //         <Form.Group className="mb-3" controlId="formBasicPassword">
// //           <Form.Label>Username</Form.Label>
// //           <Form.Control type="name" placeholder="name" value={props.userId} />
// //         </Form.Group>

        
// //         <Form.Group className="mb-3" controlId="formBasicPassword">
// //           <Form.Label>Roleassign</Form.Label>
// //           <Form.Control type="name" placeholder="name" value={props.userName} />
// //         </Form.Group>
       
// //         <Button variant="primary" type="submit">
// //           Submit
// //         </Button>
// //       </Form>
// //       </>
// //     );
// //   }
  
// //   export default Roleassign;



// import React, {useEffect, useState} from 'react'
// import {Button,  Modal, Form, Dropdown, DropdownButton} from 'react-bootstrap';
// import axios from 'axios';


// function Role_assign(props) {
//      /////////// STATES FOR GET ROLES ///////////
//   // console.log(props.data, 'aya wala dats')
//      const[roledata, setData]=useState([])
 

//      //// STATES FOR POST ROLE ASSIGN DATA /////

//      const [assignUserId, setAssignRoleUserId] = useState('')
//      const [assignRoleId, setAssignRoleId] = useState('')
     

//      ///////////////////////////////////////////////////
//     const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   /////////////////////////////   FUNCTION FOR GET ROLES     ///////////////////////////

  
//   const getData = async ()=>{
//     const api = await axios.get('http://localhost:6767/role/api/admin/roles/view')
//     const apiResult = api.data
//     // console.log("api", api)
//     // console.log("apiResult",apiResult)
//     setData(apiResult)
//     // console.log("roledata", roledata)
//     // console.log(api, 'apidata')
//   }


// console.log(roledata, 'roledata')

// useEffect(()=>{
//   getData()
// }, [])
//   return (
//     <>
//       <Button variant="dark" onClick={handleShow}>
//         Role Assign
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Assign Role</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
            

//         <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>User ID</Form.Label>
//         <Form.Control value={props.uid}  type="text"/>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>User Name</Form.Label>
//         <Form.Control value={props.user_name} type="text" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Select Role</Form.Label>

// <select> Select Role
// {
//   roledata && roledata.map((item, index)=>{
//      return(
    
//           <option placeholder='Select Role'>{`${item.role_name}`}</option>
       
//      )
//   })
// }
// </select>        
//  </Form.Group>
//     </Form>
//         </Modal.Body>
//         <Modal.Footer>
//          <Button variant="success" onClick={handleClose}>
//             Save Changes
//           </Button>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
         
//         </Modal.Footer>
//       </Modal>
//     </>
//   );

// }





// export default Role_assign

// // import axios from 'axios'
// // import React, { useEffect, useState } from 'react'
// // import { Modal, Button, Form } from 'react-bootstrap';
// // import { useNavigate } from 'react-router-dom';




// // function AssignRole(props) {
// //   const [data, setData] = useState({
// //     uid: '',
// //     role_id: ''
// //   })
// //   const [roles, setRoles] = useState([]);

// //   const getRoleData = async () => {
// //     await axios.get("http://localhost:8081/roles/getRole")
// //       .then(res => {
// //         setRoles(res.data);
// //       })
// //       .catch(err => {
// //         console.log("error fetching roles", err);
// //       });
// //   }

// //   const navigate = useNavigate();
// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     await axios.post("http://localhost:8081/assign/grantRole", data)
// //       .then(result => {
// //           alert("Assigned Role successfully")
// //       })
// //       .catch(err => {
// //         alert(err)
// //       })
// //   }

  

// //   useEffect(() => {
// //     getRoleData()
// //   }, [])
// //   return (
// //     <>
// //       <Modal
// //         {...props}
// //         size="lg"
// //         aria-labelledby="contained-modal-title-vcenter"
// //         centered
// //       >
// //         <Modal.Header closeButton>
// //           <Modal.Title id="contained-modal-title-vcenter">
// //             Assign Role
// //           </Modal.Title>
// //         </Modal.Header>
// //         <Modal.Body>
// //           <div className="w-30 justify-center ">
// //             <h2 className="mb-4  text-center">Assign Roles</h2>
// //             <form className="row g-3 w-30 border " onSubmit={handleSubmit} >
// //               <div className="col-12">
// //                 <label for="inputName" class="form-label">User Id</label>
// //                 <input type="text" class="form-control" id="inputName" autoComplete='off'
// //                   onChange={(e) => setData({ ...data, uid: e.target.value })}  value={props.assignId}/>
// //               </div>
// //               <div className="col-12">
// //                 <label for="inputName" class="form-label">Role Name</label>
// //                 <Form.Select aria-label="Default select example"
// //                   onChange={(e) => setData({ ...data, role_id: e.target.value })}>
// //                   <option value="">Select Roles</option>
// //                   {roles.map((item) => (
// //                     <option key={item.role_id} value={item.role_id}>
// //                       {item.rolename}
// //                     </option>
// //                   ))}
// //                 </Form.Select>
// //               </div>
// //               <div class="col-12">
// //                 <button type="submit" class="btn btn-primary" onClick={handleSubmit}  >Submit</button>
// //               </div>
// //             </form>
// //           </div>
// //         </Modal.Body>
// //         <Modal.Footer>
// //           <Button onClick={props.onHide}>Close</Button>
// //         </Modal.Footer>
// //       </Modal>


// //     </>
// //   )
// // }

// // export default AssignRole


import React, {useEffect, useState} from 'react'
import {Button,  Modal, Form, Dropdown, DropdownButton} from 'react-bootstrap';
import axios from 'axios';


function Role_assign(props) {
     /////////// STATES FOR GET ROLES ///////////
  // console.log(props.data, 'aya wala dats')
    //  const[roledata, setData]=useState([])

    const [data, setData] = useState({
      uid: '',
      role_id: ''
    })
    const [roles, setRoles] = useState([]);
  
 

     //// STATES FOR POST ROLE ASSIGN DATA /////

     const [assignUserId, setAssignRoleUserId] = useState('')
     const [assignRoleId, setAssignRoleId] = useState('')
     

     ///////////////////////////////////////////////////
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /////////////////////////////   FUNCTION FOR GET ROLES     ///////////////////////////

//   const getData = async ()=>{
//     const api = await axios.get('http://localhost:6767/role/api/admin/roles/view')
//     const apiResult = api.data
//     // console.log("api", api)
//     // console.log("apiResult",apiResult)
//     setData(apiResult)
//     // console.log("roledata", roledata)
//     // console.log(api, 'apidata')
//   }

// console.log(roledata, 'roledata')

// useEffect(()=>{
//   getData()
// }, [])



const getRoleData = async () => {
  await axios.get("http://localhost:6767/role/api/admin/roles/view")
    .then(res => {
      setRoles(res.data);
    })
    .catch(err => {
      console.log("error fetching roles", err);
    });
}

// const navigate = useNavigate();
const handleSubmit = async (event) => {
  event.preventDefault();
  await axios.post("http://localhost:6767/api/admin/role/assign/postrole/:role_id/:user_id", data)
    .then(result => {
        alert("Assigned Role successfully")
    })
    .catch(err => {
      alert(err)
    })
}



useEffect(() => {
  getRoleData()
}, [])
  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Role Assign
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Assign Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            

        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User ID</Form.Label>
        <Form.Control value={props.uid}   type="text"/>
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Role Id</Form.Label>
        <Form.Control value={props.role_id} type="text" />
      </Form.Group> */}
       <div className="col-12">
                <label for="inputName" class="form-label">Role Name</label>
                <Form.Select aria-label="Default select example"
                  onChange={(e) => setData({ ...data, role_id: e.target.value })}>
                  <option value="">Select Roles</option>
                  {roles.map((item) => (
                    <option key={item.role_id} value={item.role_id}>
                      {item.role_name}
                    </option>
                  ))}
                </Form.Select>
              </div>
{/* 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Select Role</Form.Label> */}

{/* <select> Select Role
{
  roledata && roledata.map((item, index)=>{
     return(
    
          <option placeholder='Select Role'>{`${item.role_name}`}</option>
       
     )
  })
}
</select>         */}
 {/* </Form.Group> */}
    </Form>
        </Modal.Body>
        <Modal.Footer>
         <Button variant="success" onClick={handleClose}>
            Save Changes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );

}

export default Role_assign








