import React from "react";
import { useParams, Link } from "react-router-dom";

const EmployeeDetails = ({ employees, userRole }) => {
  const { id } = useParams();
  const employee = employees.find((emp) => emp.id === parseInt(id));

  // Define roles that can edit employees
  const canEdit = ["CEO", "Director", "Manager"].includes(userRole);

  return employee ? (
    <div className="employee-details-container">
      <div className="employee-card">
        <h2 className="employee-name">{employee.name}</h2>
        <p className="employee-position">{employee.position}</p>
        <span className="employee-department">{employee.department}</span>
        <div className="employee-actions">
          {canEdit && (
            <Link to={`/edit/${employee.id}`} className="edit-btn">
              Edit
            </Link>
          )}
          <Link to="/" className="back-btn">
            Back to List
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <p className="no-employee">No Employee found</p>
  );
};

export default EmployeeDetails;
