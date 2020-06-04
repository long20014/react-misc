import React from 'react';
import { Route } from 'react-router-dom';
import ComponentGeneratorPage from 'pages/component-generator-page/component-generator-page';

const ComponentGeneratorPageRoute = () => {
  return (
    <Route path="/component-generator" component={ComponentGeneratorPage} />
  )
}

export default ComponentGeneratorPageRoute;