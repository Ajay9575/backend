import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { Link } from 'react-router-dom';
const SideBar = () => {
  return (
    <CDBSidebar textColor="#333" backgroundColor="#79d9d1">
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
      </CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu>
          <Link to="/"><CDBSidebarMenuItem icon="bi bi-house-fill">Home</CDBSidebarMenuItem></Link>
          <Link to="/admin/users"><CDBSidebarMenuItem icon="bi bi-people-fill">Users</CDBSidebarMenuItem></Link>
          <Link to="/admin/roles"><CDBSidebarMenuItem icon="bi bi-person-workspace" >Roles</CDBSidebarMenuItem></Link>
          <Link to="/admin/category"><CDBSidebarMenuItem icon="fas fa-folder">Category</CDBSidebarMenuItem></Link>
          <Link to="/admin/subcategory"><CDBSidebarMenuItem icon="bi bi-file-spreadsheet-fill">Sub Category</CDBSidebarMenuItem></Link>
          <Link to="/admin/retailer"><CDBSidebarMenuItem icon="bi bi-bag-check-fill">Retailer</CDBSidebarMenuItem></Link>
          <Link to="/admin/customers"><CDBSidebarMenuItem icon="bi bi-people-fill">Customers</CDBSidebarMenuItem></Link>
          <Link to="/admin/offers"><CDBSidebarMenuItem icon="bi bi-tags-fill">Offers</CDBSidebarMenuItem></Link>
          <Link to="/adimn/others"><CDBSidebarMenuItem icon="bi bi-three-dots">Others</CDBSidebarMenuItem></Link>
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>
  );
};

export default SideBar;