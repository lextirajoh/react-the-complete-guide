import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// import App from './ExpenseApp/App';
// import App from './CourseGoalsApp/App'
// import App from './CourseGoalsDebug/App'
// import App from './Users/App';
import App from './RouterApp/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
