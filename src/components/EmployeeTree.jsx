import React, { useEffect, useState } from "react";
import EmployeeNode from "./EmployeeNode";

const EmployeeTree = ({ employees }) => {
  const [treeRoot, setTreeRoot] = useState(null);

  const buildEmployeeTree = (employees) => {
    const employeeMap = {};
    employees.forEach((emp) => {
      employeeMap[emp.id] = { ...emp, children: [] };
    });

    let root = null;
    employees.forEach((emp) => {
      if (emp.reportsTo) {
        employeeMap[emp.reportsTo].children.push(employeeMap[emp.id]);
      } else {
        root = employeeMap[emp.id];
      }
    });

    return root;
  };

  useEffect(() => {
    if (employees) {
      const result = buildEmployeeTree(employees);
      setTreeRoot(result);
    }
  }, [employees]);

  return (
    <div>
      <h2>Employee Hierarchy</h2>
      {treeRoot && <EmployeeNode employee={treeRoot} />}
    </div>
  );
};

export default EmployeeTree;
