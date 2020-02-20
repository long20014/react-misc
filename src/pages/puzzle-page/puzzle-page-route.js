import React from 'react';
import { Route } from 'react-router-dom';
import PuzzlePage from 'pages/puzzle-page/puzzle-page';

const PuzzlePageRoute = () => {
  return (
    <Route path="/puzzle" component={PuzzlePage} />
  )
}

export default PuzzlePageRoute;