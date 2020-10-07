import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  // list contains state for firstname and age
  const [inputInfoList, setInputInfoist] = useState([{ firstname: '', age: 0 }])
  return (
    <div className="App">
      <div className="Form">
        <input type="text" placeholder="Firstname" class="form-control" />
        <input type="text" placeholder="Lastname" class="form-control" />
      </div>
    </div>
  );
}

export default App;
