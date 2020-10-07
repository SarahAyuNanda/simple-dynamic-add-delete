import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  // list contains state for firstname and age
  const [inputInfoList, setInputInfoList] = useState([{ firstname: '', age: 0 }])

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
    setInputInfoList([...inputInfoList, { firstname: "", age: 0 }])
  }

  return (
    <div className="App">
      <button type="button" class="btn btn-primary" onClick={handleAddClick}>Add</button>
      {inputInfoList.map((data, index) => {
        return (
          <div className="Form">
            <input
              type="text"
              placeholder="Firstname"
              class="form-control"
              name="firstname"
              value={data.firstname}
              onChange={e => handleInputChange(e, index)} />
            <input
              type="text"
              placeholder="Age"
              class="form-control"
              name="age"
              value={data.age}
              onChange={e => handleInputChange(e, index)} />
            <button type="button" class="btn btn-danger" onClick={() => handleDeleteClick(index)}>Delete</button>
          </div>
        )
      })}
      <div class="table-responsive-sm">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
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
                <tr key={index}>
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
