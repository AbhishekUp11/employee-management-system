import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeForm = ({ employees, setEmployees, isEdit }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const existingEmployee = employees.find((emp) => emp.id === parseInt(id)) || {
    name: "",
    position: "",
    department: "",
    reportsTo: null,
  };
  const [formData, setFormData] = useState(existingEmployee);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      setEmployees(
        employees.map((emp) =>
          emp.id === existingEmployee.id ? formData : emp
        )
      );
    } else {
      setEmployees([...employees, { ...formData, id: employees.length + 1 }]);
    }
    navigate("/");
  };

  return (
    <div className="employee-form-container">
      <h2>{isEdit ? "Edit Employee" : "Create Employee"}</h2>
      <form onSubmit={handleSubmit} className="employee-form">
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="position"
          placeholder="Position"
          value={formData.position}
          onChange={handleChange}
          required
        />
        <input
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
          required
        />
        <input
          name="reportsTo"
          placeholder="Reports To"
          value={formData.reportsTo}
          onChange={handleChange}
          required
        />
        <button type="submit" className="form-submit-button">
          {isEdit ? "Update" : "Create"} Employee
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
