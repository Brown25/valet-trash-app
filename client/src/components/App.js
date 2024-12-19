import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Assuming you have some basic styles

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Valet Trash App</h1>
        <p>Your application is running successfully!</p>
      </header>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));