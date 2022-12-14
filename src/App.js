import EmployeForm from "./components/EmployeForm";
import EmployeTable from "./components/EmployeTable";
import "./App.css";
import { useState } from "react";

const sampleData = [
  {
    Fname: "shrinivas",
    Lname: "Joshi",
    handle: "@shrinivas",
  },
  {
    Fname: "Dhruv",
    Lname: "Joshi",
    handle: "@Dhruv",
  },
  {
    Fname: "Dhananjay",
    Lname: "Patidar",
    handle: "@Dpatidar",
  },
];

function App() {
  const [data, setData] = useState(sampleData)
  
  return (
    <div className="App">
      <h1 className="emp-heading">Task 2</h1>
      <EmployeTable data={data}  />
      <EmployeForm data={data} setData={setData}/>
    </div>
  );
}

export default App;
