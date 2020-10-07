import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  // list contains state for firstname and age
  const [inputInfoList, setInputInfoist] = useState([{ firstname: '', age: 0 }])

  const addInfo = () => {
    inputInfoList.map((data, index) => {
      return (
        <div className="Form">
          <input
            type="text"
            placeholder="Firstname"
            class="form-control"
            name="firstname"
            value={data.firstname} />
          <input
            type="number"
            placeholder="Age"
            class="form-control"
            name="age"
            value={data.age} />
          <button type="button" class="btn btn-danger">Delete</button>
        </div>
      )
    })
  }

  return (
    <div className="App">
      <button type="button" class="btn btn-primary" onClick={addInfo()}>Add</button>
    </div>
  );
}

export default App;
