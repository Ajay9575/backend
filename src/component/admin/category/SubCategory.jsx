import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Form from 'react-bootstrap/Form';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const columns = [
  // { id: 'id', label: 'Sr.no.', minWidth: 100 },
  { id: 'Id', label: 'ID', minWidth: 100 },
  {
    id: 'sub category',
    label: 'Name',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'Photo',
    label: 'Photo',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'Added On',
    label: 'Added On',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'Action',
    label: 'Action',
    minWidth: 100,
    align: 'right',
  },
];

function Subcategory() {
  const [data, setData] = useState([]);
  const [prod_category_id, setcatId] = useState('')
  const [ pro_subcategory_id, setpro_subcategory_id] = useState('');
  const [ pro_subcategory_name, setpro_subcategory_name] = useState('');
  const [photo, setPhoto] = useState('');
  // const [prod_category_id, setprod_category_id] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [product, setProduct] = useState([]) 


  const handelSave = (id) => {

    const formData = new FormData()
    // const [prod_category_id, setcatId] = useState('')
    formData.append('  pro_subcategory_id',  pro_subcategory_id)
    formData.append(' pro_subcategory_name',  pro_subcategory_name)
    formData.append('photo', photo)
    axios.post(`http://localhost:6767/subcat/api/admin/subcategory/addsubcat/1 `, formData)
      .then((result) => {
        if (result.data.status === 'Successfully enter') {
          alert('subCategory Added Successfully');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    axios.post('http://localhost:6767/subcat/api/admin/subcategory/viewsubcat')
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios.post('http://localhost:6767/category/api/admin/category/view')
      .then((result) => {
        setProduct(result.data);
        console.log(product)
      })
      .catch((err) => {
        console.log(err);
      });

  }, [])

  // Pagination
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = data.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="container d-flex justify-content-center" style={{margin:'30px'}}>
        {/* Add Subcategory Form */}
        <form action="" onSubmit={handelSave(prod_category_id)}>
        <div class="card mx-5 mt-5" style={{ width: '20rem' }}>
          <h3 className='text-center mt-2'>Add Sub categories</h3>
          <div class="card-body justify-content-center">
          <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Category ID</label>
                        <Form.Select aria-label="Default select example"
                  >
                  <option value="">Select category</option>
                  {product.map((item) => (
                    <option key={item.prod_category_id} value={item.prod_category_id}>
                      {item.prod_category_name}
                    </option>
                  ))}
                </Form.Select>
                        
                    </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Sub category ID</label>
              <input type="number" class="form-control" onChange={(e) => setpro_subcategory_id(e.target.value)} id="exampleFormControlInput1" placeholder="Enter sub Catgory Id" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Sub category Name</label>
              <input type="text" class="form-control" onChange={(e) => setpro_subcategory_name(e.target.value)} id="exampleFormControlInput1" placeholder="Enter sub Catgory Name" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Sub category Photo</label>
              <input type="file" class="form-control" onChange={(e) => setPhoto(e.target.files[0])} id="exampleFormControlInput1" />
            </div>
            <button type="submit" onSubmit={handelSave(prod_category_id)}  class="btn col-12 btn-outline-primary">Save</button>
          </div>
        </div>
        </form>
        <div className="mx-5 mt-5 border">
          <h3 className="mt-2 text-center">All Subcategory List</h3>
          <TableContainer component={Paper}>
            <Table aria-label="sticky table">
              <TableHead>
              <TableRow>
           <TableCell align="right">CatId</TableCell>
            <TableCell align="right">SubCatId</TableCell>
            <TableCell align="right">SubCatName</TableCell>
            <TableCell align="right">Photo</TableCell>
            {/* <TableCell align="right">addon</TableCell> */}
          </TableRow>
              </TableHead>
              <TableBody>
                {currentUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.prod_category_id}</TableCell>
                    {/* <TableCell>{user.prod_category_id}</TableCell> */}
                    <TableCell>{user.pro_subcategory_id}</TableCell>
                    <TableCell>{user.pro_subcategory_name}</TableCell>
                    <TableCell><img src={user.photo} alt={user.name} height={50} width={50} /></TableCell>
                    {/* <TableCell>{user.addon}</TableCell> */}
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      {/* Pagination */}
      <div className="d-flex justify-content-center">
        {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map(
          (_, pageNumber) => (
            <button
              key={pageNumber}
              className={`btn ${pageNumber + 1 === currentPage ? 'btn-primary' : 'btn-outline-dark'
                }`}
              onClick={() => paginate(pageNumber + 1)}
            >
              {pageNumber + 1}
            </button>
          )
        )}
      </div>

    </>
  );
}

export default Subcategory;
