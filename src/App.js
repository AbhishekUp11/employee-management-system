import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import EmployeeDetails from "./components/EmployeeDetails";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeTree from "./components/EmployeeTree";
import "./style.css";

const employeesData = [
  {
    id: 1,
    name: "Jack Qalis",
    position: "CEO",
    department: "Management",
    role: "CEO",
  },
  {
    id: 7,
    name: "Jack welch",
    position: "Director",
    department: "Management",
    role: "Director",
    reportsTo: 1,
  },
  {
    id: 2,
    name: "Sachin Tendulkar",
    position: "Director",
    department: "Management",
    role: "Director",
    reportsTo: 1,
  },
  {
    id: 3,
    name: "Puls Korp",
    position: "Manager",
    department: "HR",
    role: "Manager",
    reportsTo: 2,
  },

  {
    id: 4,
    name: "Bill Gates",
    position: "Tech Lead",
    department: "IT",
    role: "TechLead",
    reportsTo: 2,
  },
  {
    id: 5,
    name: "Jeff Bezos",
    position: "Developer 1",
    department: "IT",
    role: "Employee",
    reportsTo: 4,
  },
  {
    id: 6,
    name: "Satyam Kumar",
    position: "Developer 2",
    department: "IT",
    role: "Employee",
    reportsTo: 4,
  },
];

const App = () => {
  const [employees, setEmployees] = useState(employeesData);
  const [searchTerm, setSearchTerm] = useState("");
  const [loggedInUser, setLoggedInUser] = useState({ id: 2, role: "Director" }); // we can use global state manager

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <nav className="navbar">
        <h1 className="company-name">Phenom People Pvt. Ltd</h1>
        <input
          type="text"
          placeholder="Search Employee..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </nav>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <EmployeeList
                employees={filteredEmployees}
                loggedInUser={loggedInUser}
              />
            }
          />
          <Route
            path="/employee/:id"
            element={
              <EmployeeDetails
                employees={employees}
                userRole={loggedInUser?.role}
              />
            }
          />
          <Route
            path="/create"
            element={
              <EmployeeForm
                employees={employees}
                setEmployees={setEmployees}
                isEdit={false}
              />
            }
          />
          <Route
            path="/edit/:id"
            element={
              <EmployeeForm
                employees={employees}
                setEmployees={setEmployees}
                isEdit={true}
              />
            }
          />
          <Route
            path="/employee-tree"
            element={<EmployeeTree employees={filteredEmployees} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
