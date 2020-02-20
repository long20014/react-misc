import React from 'react';
import { Route } from 'react-router-dom';
import ClockPage from 'pages/clock-page/clock-page';

const ClockPageRoute = () => {
  return (
    <Route path="/clock" component={ClockPage} />
  )
}

export default ClockPageRoute;