import React from "react";

const EmployeeNode = ({ employee }) => {
  return (
    <div
      style={{
        marginLeft: "20px",
        borderLeft: "2px solid gray",
        paddingLeft: "10px",
      }}
    >
      <p>
        <strong>{employee?.name}</strong> ({employee?.position})
      </p>
      {employee?.children?.length > 0 && (
        <div>
          {employee.children.map((child) => (
            <EmployeeNode key={child?.id} employee={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EmployeeNode;
