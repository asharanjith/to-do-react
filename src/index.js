import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import TodoContainer from './functionbased/components/TodoContainer';
import './functionbased/App.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <TodoContainer />
    </BrowserRouter>
  </React.StrictMode>,
);
