import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BodyRender from './BodyRender';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <BodyRender />
  </BrowserRouter>,
  document.getElementById('root')
);

