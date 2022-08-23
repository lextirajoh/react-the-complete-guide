import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './ExpenseApp/App';
// import App from './CourseGoalsApp/App'
// import App from './CourseGoalsDebug/App'
import App from './Users/App';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
