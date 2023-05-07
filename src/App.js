import React, { useState } from 'react';
import './styles/App.css';
import Crm from './Crm';
import footer from './footer'

import Components from './Components';

function App() {

  return (
    <div>
      <Components />
      <Crm/>
      <footer/>
    </div>
  );
}

export default App;