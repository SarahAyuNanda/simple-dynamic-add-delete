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
    </div>
  );
}

export default App;
