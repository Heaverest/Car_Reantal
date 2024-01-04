import React from 'react';
//import ReactDOM from 'react-dom/client';
import './index.css';
import {strictmode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import store  from './Redux/store';
import { Provider } from 'react-redux';





const rootelement = 
document.getElementById('root');
const root = 
  createRoot(rootelement);

root.render(
  <strictmode>
    <Provider store={store}>
      <App />
    </Provider>
  </strictmode>,
  
);

