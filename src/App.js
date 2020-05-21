import React from 'react';
import logo from './logo.svg';
import './App.css';

import TaskTable from './Components/TaskTable/TaskTable';
import AddTask from './Components/AddTask/AddTask';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="container">
          <div className="table-portion">
            <TaskTable />
          </div>
          <div className="tools-portion">
            <AddTask />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
