import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


// const node0 = {
//   value: (code state at this node)
//   next: {node1}
// }

// const node1 = {
//   value: (code at THIS particular commit node)
//   next: {node2}
// }

// const node2 = {
//   value: (code at THIS particular commit node)
//   next: {null}
// }