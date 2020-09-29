import React, { useState } from 'react';

import './App.css';

function App() {
  const [inputNameList, setInputNameList] = useState(
    [
      {
        firstname: '',
        lastname: ''
      }
    ]
  )
  return (
    <div className="App">
    </div>
  );
}

export default App;
