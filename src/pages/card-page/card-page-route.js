import React from 'react';
import { Route } from 'react-router-dom';
import CardPage from 'pages/card-page/card-page';

const CardPageRoute = () => {
  return (
    <Route path="/card" component={CardPage} />
  )
}

export default CardPageRoute;