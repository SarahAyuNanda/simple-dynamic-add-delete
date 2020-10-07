import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  // list contains state for firstname and age
  const [inputInfoList, setInputInfoList] = useState([{ firstname: '', age: "" }])

  // handle change to input info
  const handleInputChange = (event, index) => {
    const { name, value } = event.target
    const infoList = [...inputInfoList]
    infoList[index][name] = value
    setInputInfoList(infoList)
  }

  // handle click for delete button
  const handleDeleteClick = index => {
    const infoList = [...inputInfoList]
    infoList.splice(index, 1)
    setInputInfoList(infoList)
  }

  // handle click for add button
  const handleAddClick = () => {
    setInputInfoList([...inputInfoList, { firstname: "", age: "" }])
  }

  // handle change to count the average 
  const ageAverage = () => {
    const sum = inputInfoList.reduce((beforeSum, currentSum) => beforeSum = beforeSum + parseInt(currentSum.age), 0)
    const length = inputInfoList.length
    const average = sum / length
    return average
  }

  return (
    <div className="App">
      {/* ADD BUTTON */}
      <button type="button" class="btn btn-primary" onClick={handleAddClick}>Add</button>

      {/* INPUT FORM */}
      {inputInfoList.map((data, index) => {
        return (
          <div className="Form">
            <input
              type="text"
              autoComplete="off"
              placeholder="Firstname"
              class="form-control"
              name="firstname"
              value={data.firstname}
              onChange={e => handleInputChange(e, index)} />
            <input
              type="number"
              placeholder="Age"
              class="form-control"
              name="age"
              value={data.age}
              onChange={e => handleInputChange(e, index)} />
            <button type="button" class="btn btn-danger" onClick={() => handleDeleteClick(index)}>Delete</button>
          </div>
        )
      })}

      {/* SHOW AVERAGE OF AGE */}
      <div className="Average">
        Average of age : {inputInfoList.length === 0 ? 0 : ageAverage()}
      </div>

      {/* TABLE */}
      <div class="table-responsive-sm">
        <table class="table table-bordered table-hover">
          <thead>
            <tr align="center">
              <th scope="col" style={{ width: "50px" }}>#</th>
              <th scope="col">Firstname</th>
              <th scope="col">Age</th>
            </tr>
          </thead>
          <tbody>
            {inputInfoList.length === 0 ?
              <tr align="center">
                <th colSpan="3" >...No showed data...</th>
              </tr> :
              inputInfoList.map((data, index) => (
                <tr key={index} align="center">
                  <td>{index + 1}</td>
                  <td>{data.firstname}</td>
                  <td>{data.age}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default App;
