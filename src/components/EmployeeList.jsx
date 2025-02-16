import React from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

const EmployeeList = ({ employees, loggedInUser }) => (
  <div className="employee-list-container">
    <h2>Employee List</h2>
    <table className="employee-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          {loggedInUser.role !== "Employee" && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id}>
            <td>
              <Link to={`/employee/${emp.id}`} className="employee-link">
                {emp.name}
              </Link>
            </td>
            <td>{emp.position}</td>
            <td>
              {loggedInUser.role !== "Employee" && ( // Only non-employees can edit
                <Link to={`/edit/${emp.id}`} className="edit-button">
                  Edit
                </Link>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    {loggedInUser.role === "Director" || loggedInUser.role === "CEO" ? (
      <Link to="/create">
        <button className="add-employee-button">Add Employee</button>
      </Link>
    ) : null}
  </div>
);

export default EmployeeList;
