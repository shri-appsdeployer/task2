import React from "react";
import './EmployeTable.css'

const EmployeTable = ({data}) => {
  return (
    <>
      <div className="table-wrapper">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {data.map((emp,index)=>(
              <tr>
              <th scope="row">{index+1}</th>
              <td>{emp.Fname}</td>
              <td>{emp.Lname}</td>
              <td>{emp.handle}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmployeTable;
