import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { BrowserRouter } from 'react-router-dom';
// import App from './ExpenseApp/App';
// import App from './CourseGoalsApp/App'
// import App from './CourseGoalsDebug/App'
// import App from './Users/App';
// import App from './RouterApp/App';
import App from './ReduxApp/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
