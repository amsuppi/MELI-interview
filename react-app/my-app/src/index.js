import React from 'react';
import ReactDOM from 'react-dom';
import BodyRender from './BodyRender';
import './styles.scss';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <BodyRender />
  </BrowserRouter>,
  document.getElementById('root')
);

