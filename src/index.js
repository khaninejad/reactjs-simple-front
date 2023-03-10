import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './elements/menu';
import SignIn from './auth/sign-in';
import SignUp from './auth/sign-up';
import Signout from './auth/signout';
import Home from './pages/home';
import AddEmployee from './pages/employee/add-employee';
import EmployeeList from './pages/employee/list-employee';
import AddDepartment from './pages/department/add-department';
import DepartmentList from './pages/department/list-department';
import ImportEmployees from './pages/employee/import-employee';
import EditDepartment from './pages/department/edit-department';
import EditEmployee from './pages/employee/edit-employee';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Menu /> }> </Route>
      <Route path="/home" element={<Home />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/signOut" element={<Signout />} />
      <Route path="/add-employee" element={<AddEmployee />} />
      <Route path="/list-employee" element={<EmployeeList />} />
      <Route path="/add-department" element={<AddDepartment />} />
      <Route path="/list-department" element={<DepartmentList />} />
      <Route path="/edit-department/:id" element={<EditDepartment />} />
      <Route path="/edit-employee/:id" element={<EditEmployee />} />
      <Route path="/import-employees" element={<ImportEmployees />} />
    </Routes>
  </BrowserRouter>
</React.StrictMode>,
);
reportWebVitals();
