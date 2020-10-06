import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  // list contains state for firstname and lastname
  const [inputNameList, setInputNameList] = useState([{ firstname: '', lastname: '' }])
  return (
    <div className="App">
    </div>
  );
}

export default App;
