import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  // list contains state for firstname and lastname
  const [inputNameList, setInputNameList] = useState([{ firstname: '', lastname: '' }])
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
