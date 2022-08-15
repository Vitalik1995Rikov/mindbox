import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/layout/Layout';
import Home from './components/pages/home/Home';

import './index.css'

ReactDOM.render(
    <StrictMode>
      <Layout>
        <Home/>
      </Layout>
    </StrictMode>,
  document.getElementById('root')
);