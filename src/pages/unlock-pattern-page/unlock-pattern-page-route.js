import React from 'react';
import { Route } from 'react-router-dom';
import UnlockPatternPage from 'pages/unlock-pattern-page/unlock-pattern-page-route';

const UnlockPatternPageRoute = () => {
  return (
    <Route path="/unlock-pattern" component={UnlockPatternPage} />
  )
}

export default UnlockPatternPageRoute;